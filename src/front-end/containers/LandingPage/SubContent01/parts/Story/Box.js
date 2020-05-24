import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 960;

const useStyles = makeStyles(theme => ({
  container: {
    width,
    height: 1,
    position: 'relative',
  },
  gradient: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  frame: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  video: {
    top: (428 - 290) / 2,
    left: (428 - 290) / 2,
    position: 'absolute',
  },
}));

export default ({ videoImgSrc }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <img
        className={classes.gradient}
        alt="gradient"
        src="./images/desktop/svg/gradient 1660.svg"
        width={width}
      />
      <img
        className={classes.frame}
        alt="frame"
        src="./images/desktop/svg/frame 1660.svg"
        width={width}
      />
      <img
        className={classes.video}
        alt="text"
        src="./images/desktop/png/video.png"
        width={513}
      />
    </div>
  );
};
