import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Home.module.css';

export function Home(): JSX.Element {
  const [username, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  type HandleChangeType = (event: React.FormEvent) => void;
  const handleChangeInput: HandleChangeType = ({ target }) => {
    console.log(target);
  };

  type HandleSubmitType = (event: React.FormEvent) => void;
  const handleSubmit: HandleSubmitType = event => {
    event.preventDefault();
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
        <TextField id="standard-basic" label="E-mail" />
        <TextField id="standard-basic" label="Password" />
        <TextField id="standard-basic" label="Repeat password" />
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
