import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import PreOrderButton from '../shared/PreOrderButton';

const width = 280;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: '12%', // 80,
    left: '15%', // 100,
    width,
    height: 1,
    position: 'absolute',
  },
  logo: {
    top: 0,
    left: 20,
    position: 'absolute',
  },
  subtitle: {
    top: 160,
    left: 20,
    position: 'absolute',
  },
  preordernow: {
    top: 220,
    position: 'absolute',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <img
        className={classes.logo}
        alt="logo"
        src="./images/desktop/svg/logo.svg"
        width={width - 40}
      />
      <img
        className={classes.subtitle}
        alt="subtitle"
        src="./images/desktop/svg/rebuild_the_holy_city.svg"
        width={width - 40}
      />
      <div
        className={classes.preordernow}
      >
        <PreOrderButton />
      </div>
    </div>
  );
};
