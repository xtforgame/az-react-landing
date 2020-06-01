import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 180;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: 260,
    left: 'calc(50% - 330px)',
    width,
    height: 1,
    position: 'absolute',
  },
  item: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  shadow: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <img
        className={classes.shadow}
        alt="subtitle"
        src="./images/mobile/svg/m_item2 shadow.svg"
        width={width}
      />
      <img
        className={classes.item}
        alt="logo"
        src="./images/mobile/svg/m_item2.svg"
        width={width}
      />
    </div>
  );
};
