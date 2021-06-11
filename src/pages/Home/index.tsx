import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Home.module.css';

export function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <form className={styles.form} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Username" />
        <TextField id="standard-basic" label="E-mail" />
        <TextField id="standard-basic" label="Password" />
        <TextField id="standard-basic" label="Repeat password" />
        <Button
          style={{ marginTop: '20px' }}
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
