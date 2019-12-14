import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const buttons = [
  {
    name: 'SOLO PLAY',
    onClick: () => {},
  },
  {
    name: 'MULTIPLAYER',
    onClick: () => {},
  },
  {
    name: 'OPTIONS',
    onClick: () => {},
  },
  {
    name: 'BATTLE SCHOOL',
    onClick: () => {},
  },
  {
    name: 'CREDITS',
    onClick: () => {},
  },
  {
    name: 'EXIT',
    onClick: () => {},
  }
];

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 150,
    background: '#704120',
    color: '#d88d50'
  },
}));

export default function Buttons() {
  let key = 0;
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      {buttons.map(({name, onClick}) =>
        <Grid item xs={2} className={classes.buttonContainer}>
          <Button
            key={++key}
            onClick={onClick}
            className={classes.button}>
            {name}
          </Button>
        </Grid>
      )}
    </Grid>
  );
}