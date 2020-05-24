import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import SimpleMediaCard from './SimpleMediaCard';
import Section from './Section';
import Member from './Member';
import Contact from './Contact';

import Header from './parts/Header';
import InBox from './parts/InBox';

const useStyles = makeStyles(theme => ({
  topImageContainer01: {
    width: '100%',
    height: 400,
    [theme.breakpoints.up('sm')]: {
      height: 520,
    },
    [theme.breakpoints.up('md')]: {
      height: 720,
    },
    [theme.breakpoints.up('lg')]: {
      height: 960,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1020,
    },
  },
  topImageContainer02: {
    width: '100%',
    height: 400,
    [theme.breakpoints.up('sm')]: {
      height: 520,
    },
    [theme.breakpoints.up('md')]: {
      height: 720,
    },
    [theme.breakpoints.up('lg')]: {
      height: 960,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1020,
    },
  },
  topImageContainer03: {
    width: '100%',
    height: 400,
    [theme.breakpoints.up('sm')]: {
      height: 520,
    },
    [theme.breakpoints.up('md')]: {
      height: 720,
    },
    [theme.breakpoints.up('lg')]: {
      height: 960,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1020,
    },
  },
  topImageContainer04: {
    width: '100%',
    height: 400,
    [theme.breakpoints.up('sm')]: {
      height: 520,
    },
    [theme.breakpoints.up('md')]: {
      height: 720,
    },
    [theme.breakpoints.up('lg')]: {
      height: 960,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1020,
    },
  },
  topImageContainer05: {
    width: '100%',
    height: 400,
    [theme.breakpoints.up('sm')]: {
      height: 520,
    },
    [theme.breakpoints.up('md')]: {
      height: 720,
    },
    [theme.breakpoints.up('lg')]: {
      height: 960,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1020,
    },
  },
  topImageContainer06: {
    width: '100%',
    height: 400,
    [theme.breakpoints.up('sm')]: {
      height: 520,
    },
    [theme.breakpoints.up('md')]: {
      height: 720,
    },
    [theme.breakpoints.up('lg')]: {
      height: 960,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1020,
    },
  },
  cardMedia: {
    position: 'absolute',
    // filter: 'brightness(0.5)',
  },
  texts: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Header />
      <InBox />
      <div className={classnames(classes.topImageContainer03)}>
        <CardMedia
          image="./images/desktop/jpg/bg3-100.jpg"
          title="Bridge"
          className={classnames(classes.topImageContainer03, classes.cardMedia)}
        />
      </div>
      <div className={classnames(classes.topImageContainer04)}>
        <CardMedia
          image="./images/desktop/jpg/bg4-100.jpg"
          title="Bridge"
          className={classnames(classes.topImageContainer04, classes.cardMedia)}
        />
      </div>
      <div className={classnames(classes.topImageContainer05)}>
        <CardMedia
          image="./images/desktop/jpg/bg5-100.jpg"
          title="Bridge"
          className={classnames(classes.topImageContainer05, classes.cardMedia)}
        />
      </div>
      <div className={classnames(classes.topImageContainer06)}>
        <CardMedia
          image="./images/desktop/jpg/bg6-100.jpg"
          title="Bridge"
          className={classnames(classes.topImageContainer06, classes.cardMedia)}
        />
      </div>
    </div>
  );
};
