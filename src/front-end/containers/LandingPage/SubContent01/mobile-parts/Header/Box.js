import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 304;

const useStyles = makeStyles(theme => ({
  container: {
    width,
    position: 'relative',
  },
  gradient: {
    top: 0,
    right: 0,
    // position: 'absolute',
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
  content: {
    color: 'white',
    top: 0,
    left: 0,
    paddingTop: 114,
    paddingLeft: 27,
    paddingRight: 27,
    position: 'absolute',
    fontSize: 18,
    transform: 'scale(0.8)',
  },
}));

export default ({ textImgSrc, contentText }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <img
        className={classes.gradient}
        alt="gradient"
        src="./images/mobile/svg/m_gradient 304.svg"
        width={width}
      />
      <img
        className={classes.frame}
        alt="frame"
        src="./images/mobile/svg/m_frame 304.svg"
        width={width}
      />
      <img
        className={classes.text}
        alt="text"
        src={textImgSrc}
        width={width}
      />
      <div className={classes.content}>
        {contentText}
      </div>
    </div>
  );
};
