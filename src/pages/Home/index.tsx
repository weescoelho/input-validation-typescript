import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from 'hooks/useForm';
import styles from './Home.module.css';

export function Home(): JSX.Element {
  const email = useForm('email');
  const password = useForm('password');

  type HandleChangeType = (event: React.FormEvent) => void;
  const handleChangeInput: HandleChangeType = ({ target }) => {
    console.log(target);
  };

  type HandleSubmitType = (event: React.FormEvent) => void;
  const handleSubmit: HandleSubmitType = event => {
    event.preventDefault();
    console.log();
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Username"
          onChange={handleChangeInput}
        />
        <TextField id="email" label="E-mail" name="email" />
        <TextField id="password" label="Password" name="password" />
        <TextField
          id="confirm_password"
          label="Repeat password"
          name="confirm_password"
        />
        <Button
          style={{ marginTop: '20px' }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
