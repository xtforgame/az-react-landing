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

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100%',
    height: 400,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      height: 520,
    },
    [theme.breakpoints.up('md')]: {
      height: 800,
    },
    [theme.breakpoints.up('lg')]: {
      height: 800,
    },
    [theme.breakpoints.up('xl')]: {
      height: 800,
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
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.mainContainer)}>
      <CardMedia
        image="./images/desktop/jpg/bg3-100.jpg"
        title="Bridge"
        className={classnames(classes.mainContainer, classes.cardMedia)}
      />
      <SectionTitle imgSrc="./images/desktop/svg/story.svg" top={100} />
      <Content />
    </div>
  );
};
