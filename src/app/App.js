import React from 'react';
import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';
import { makeStyles } from '@material-ui/core/styles';

import Background from '../static/background.jpg';
import Logo from '../static/logo.png';

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
  logo: {
    position: 'absolute',
    right: 40,
    top: 40,
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
      <img src={Logo} alt='logo' className={classes.logo}/>

      <Grid item className={classes.footerContainer}>
        <Buttons/>
      </Grid>
    </Grid>
  );
}
