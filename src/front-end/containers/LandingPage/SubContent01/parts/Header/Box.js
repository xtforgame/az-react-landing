import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 200;

const useStyles = makeStyles(theme => ({
  container: {
    width,
    height: 1,
    position: 'relative',
  },
  gradient: {
    top: 0,
    right: 0,
    position: 'absolute',
  },
  frame: {
    top: 0,
    right: 0,
    position: 'absolute',
  },
  text: {
    top: 0,
    right: 0,
    position: 'absolute',
  },
}));

export default ({ textImgSrc }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <img
        className={classes.gradient}
        alt="gradient"
        src="./images/desktop/svg/gradient 400.svg"
        width={width}
      />
      <img
        className={classes.frame}
        alt="frame"
        src="./images/desktop/svg/frame 400.svg"
        width={width}
      />
      <img
        className={classes.text}
        alt="text"
        src={textImgSrc}
        width={width}
      />
    </div>
  );
};
