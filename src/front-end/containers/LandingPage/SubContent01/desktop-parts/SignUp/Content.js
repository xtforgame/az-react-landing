import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import LeftTop from './LeftTop';
import LeftBottom from './LeftBottom';
import RightTop from './RightTop';
import RightBottom from './RightBottom';

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
    // display: 'flex',
    // flexDirection: 'column',
  },
  container2: {
    flexShrink: 0,
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
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
  space: {
    flexShrink: 0,
    width: '100%',
    height: 20,
  },
  space2: {
    flexShrink: 0,
    width: '100%',
    height: 30,
  },
  inputTextBox: {
    height: 50,
    width: 300,
    fontSize: 12,
    fontWeight: 500,
    outline: 'none',
    border: 'solid',
    borderWidth: 1,
    padding: 12,
  },
  inputFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <div className={classes.inputFlex}>
        <LeftTop />
        <LeftBottom />
        <RightTop />
        <RightBottom />
      </div>
    </div>
  );
};
