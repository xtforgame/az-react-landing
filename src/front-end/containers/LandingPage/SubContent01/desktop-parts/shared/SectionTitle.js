import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 280;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    flexShrink: 0,
    // position: 'absolute',
  },
  divider: {
    flexShrink: 0,
    // position: 'absolute',
  },
  topSpace: {
    flexShrink: 0,
    width: '100%',
    height: 90,
  },
  space: {
    flexShrink: 0,
    width: '100%',
    height: 5,
  },
}));

export default ({ withoutDivider, imgSrc, withOutTopSpace, top }) => {
  const classes = useStyles();
  const theme = useTheme();
  const style = {};
  if (top != null) {
    style.top = top;
  }
  return (
    <div className={classnames(classes.container)} style={style}>
      <div className={classes.topSpace} />
      <img
        className={classes.title}
        alt="title"
        src={imgSrc}
        height={60}
      />
      {
        !withoutDivider && (
          <div className={classes.space} />
        )
      }
      {
        !withoutDivider && (
          <img
            className={classes.divider}
            alt="divider"
            src="./images/desktop/svg/b1.svg"
            height={5}
          />
        )
      }
    </div>
  );
};
