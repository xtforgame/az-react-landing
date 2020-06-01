import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import PreOrderButton from '../shared/PreOrderButton';
import Box1 from './Box1';
import VS from './VS';
import Box2 from './Box2';

const width = '100%';

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    width,
    // height: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container2: {
    // flexShrink: 0,
    // width: '100%',
    // position: 'relative',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
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
    width,
    height: 30,
    flexShrink: 0,
  },
  space2: {
    width,
    height: 20,
    flexShrink: 0,
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <div className={classes.space} />
      <Box1
        textImgSrc="./images/mobile/svg/m_the holy city.svg"
      />
      <div className={classes.space2} />
      <VS />
      <div className={classes.space2} />
      <Box2
        textImgSrc="./images/mobile/svg/m_relive.svg"
      />
      <div className={classes.space} />
      <div className={classes.space} />
      <div className={classnames(classes.container2)}>
        <PreOrderButton />
      </div>
    </div>
  );
};
