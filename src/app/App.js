import React from 'react';
import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  footerContainer: {
    // background: '#d7d7d7',
    marginBottom: 30,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='flex-end' className={classes.root}>
      <Grid item className={classes.footerContainer}>
        <Buttons/>
      </Grid>
    </Grid>
  );
}
