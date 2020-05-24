import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 205;

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
  price: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
}));

export default ({ priceImgSrc }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      {/* <img
        className={classes.gradient}
        alt="gradient"
        src="./images/desktop/svg/gradient 410.svg"
        width={width}
      />
      <img
        className={classes.frame}
        alt="frame"
        src="./images/desktop/svg/frame 410.svg"
        width={width}
      /> */}
      <img
        className={classes.price}
        alt="text"
        src="./images/desktop/svg/29.svg"
        width={width}
      />
    </div>
  );
};
