import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 420;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: '18%', // 120,
    left: 'calc(50% + 80px)',
    width,
    height: 1,
    position: 'absolute',
  },
  open: {
    top: 0,
    right: 0,
    position: 'absolute',
  },
  sepc: {
    top: 240,
    right: 0,
    position: 'absolute',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <img
        className={classes.open}
        alt="gamesvg"
        src="./images/desktop/png/image1.png"
        width={width}
      />
      <img
        className={classes.sepc}
        alt="gamesvg"
        src="./images/desktop/svg/game.svg"
        width={width - 220}
      />
    </div>
  );
};
