import React from 'react';
import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';
import Background from '../static/background.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundImage: `url(${Background})`,
  },
  backgroundOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
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
      <div className={classes.backgroundOverlay}/>
      <Grid item className={classes.footerContainer}>
        <Buttons/>
      </Grid>
    </Grid>
  );
}
