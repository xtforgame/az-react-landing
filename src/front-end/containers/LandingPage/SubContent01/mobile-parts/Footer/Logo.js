import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 160;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    width,
    // height: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    // top: 60,
    // left: 0,
    // position: 'absolute',
  },
  space: {
    flexShrink: 0,
    width,
    height: 60,
  },
}));

export default ({ priceImgSrc }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <div className={classnames(classes.space)} />
      <img
        className={classes.price}
        alt="text"
        src="./images/mobile/svg/m_logo.svg"
        width={width}
      />
    </div>
  );
};
