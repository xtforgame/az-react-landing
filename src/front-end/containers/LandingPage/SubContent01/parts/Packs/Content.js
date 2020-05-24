import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Box1 from './Box1';
import VS from './VS';
import Box2 from './Box2';

const width = 280;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: 40,
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
  prices: {
    height: 220,
  },
  title: {
    flexShrink: 0,
    // position: 'absolute',
  },
  divider: {
    flexShrink: 0,
    // position: 'absolute',
  },
  around: {
    flex: 5,
  },
  space: {
    flex: 1,
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <div className={classes.space} />
      <div className={classnames(classes.container2, classes.prices)}>
        <div className={classes.around} />
        <Box1
          textImgSrc="./images/desktop/svg/the holy city.svg"
        />
        {/* <div className={classes.space} /> */}
        <VS />
        {/* <div className={classes.space} /> */}
        <Box2
          textImgSrc="./images/desktop/svg/relive.svg"
        />
        <div className={classes.around} />
      </div>
      <div className={classnames(classes.container2)}>
        <img
          alt="subtitle"
          src="./images/desktop/svg/pre-order now.svg"
          width={280}
        />
      </div>
    </div>
  );
};
