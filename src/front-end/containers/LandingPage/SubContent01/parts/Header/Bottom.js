import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Box from './Box';

const width = 420;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: 480,
    width: '100%',
    height: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    flex: 0.3,
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <Box />
      <div className={classes.space} />
      <Box />
      <div className={classes.space} />
      <Box />
    </div>
  );
};
