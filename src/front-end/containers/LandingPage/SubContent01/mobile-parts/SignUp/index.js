import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import SectionTitle from '../shared/SectionTitle';
import Content from './Content';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100%',
    height: 600,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      height: 600,
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.up('lg')]: {
      height: 600,
    },
    [theme.breakpoints.up('xl')]: {
      height: 600,
    },
  },
  cardMedia: {
    position: 'absolute',
    // filter: 'brightness(0.5)',
  },
  texts: {
    zIndex: 900,
    top: 400,
    position: 'absolute',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  space2: {
    flexShrink: 0,
    width: '100%',
    height: 10,
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div id="sign-up" className={classnames(classes.mainContainer)}>
      <Content />
      <CardMedia
        image="./images/mobile/jpg/m_bg5-100.jpg"
        title="Bridge"
        className={classnames(classes.mainContainer, classes.cardMedia)}
      />
      <SectionTitle withoutDivider imgSrc="./images/mobile/svg/m_sign up.svg" top={50} height={120} />
      <div id="sign-up" className={classnames(classes.space2)} />
      <Form />
    </div>
  );
};
