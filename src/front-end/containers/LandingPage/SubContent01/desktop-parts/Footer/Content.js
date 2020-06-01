import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Logo from './Logo';

const width = 280;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: 40,
    left: 0,
    right: 0,
    width: '100%',
    height: 1,
    position: 'absolute',
    // display: 'flex',
    // flexDirection: 'column',
  },
  container2: {
    flexShrink: 0,
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 180,
  },
  title: {
    flexShrink: 0,
    // position: 'absolute',
  },
  divider: {
    flexShrink: 0,
    // position: 'absolute',
  },
  around: {
    flex: 5,
  },
  space: {
    flex: 1,
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <div className={classes.space} />
      <div className={classnames(classes.container2, classes.logo)}>
        <div className={classes.around} />
        <Logo />
        <div className={classes.around} />
      </div>
      <Typography variant="body1" style={{ color: 'white', width: '100%', textAlign: 'center', fontSize: 12 }}>
        ©2020 BE CREATIONS COMPANY.
      </Typography>
      {/* <div style={{ width: '100%', height: 20 }} /> */}
    </div>
  );
};
