import React from "react";

// Types armazena todos os tipos de input

interface IFormTypes {
  [propertyName: string]: {
    regex: RegExp;
    message: string;
  }
}

const formTypes: IFormTypes = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'A senha deve conter ao menos 1 caractere maiusculo, 1 minusculo e 1 digito, com no minimo 8 caracteres.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas'
  }
};
type TypeForm = string | boolean
type StateForm = string | null
const useForm = (type: TypeForm) => {
  const [value, setValue] = React.useState<StateForm>("");
  const [error, setError] = React.useState<StateForm>("");

  type HandleChangeType = (event: React.FormEvent) => void;
  const onChange: HandleChangeType = ({ target }) => {
    if (error) validate((<HTMLInputElement>target).value);
    setValue((<HTMLInputElement>target).value);
  };

  // valida o input de acordo com o tipo
  const validate = (value: string | null) => {
    if (value === null) return;
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else {
      if (type === true) return;
      if (formTypes[type] && !formTypes[type].regex.test(value)) {
        setError(formTypes[type].message);
        return false;
      } else {
        setError(null);
        return true;
      }
    }
  };

  // retorna as validações para o input
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value), // passa a validação já ativada
    onBlur: () => validate(value),
  };
};

export default useForm;