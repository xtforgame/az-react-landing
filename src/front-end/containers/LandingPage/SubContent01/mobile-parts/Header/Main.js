import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import PreOrderButton from '../shared/PreOrderButton';
import Box from './Box';

const width = '100%';

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    width,
    height: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topSpace: {
    flexShrink: 0,
    width: '100%',
    height: 40,
  },
  space: {
    flexShrink: 0,
    width: '100%',
    height: 10,
  },
  logo: {
    // top: 0,
    // left: 20,
    // position: 'absolute',
  },
  subtitle: {
    // top: 160,
    // left: 20,
    // position: 'absolute',
  },
  preordernow: {
    // top: 220,
    // position: 'absolute',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <div className={classes.topSpace} />
      <img
        className={classes.logo}
        alt="logo"
        src="./images/mobile/svg/m_logo.svg"
        width={width}
      />
      <div className={classes.space} />
      <img
        className={classes.subtitle}
        alt="subtitle"
        src="./images/mobile/svg/m_rebuild the holy city.svg"
        width={width}
      />
      <div className={classes.space} />
      <img
        className={classes.logo}
        alt="box"
        src="./images/mobile/png/m_image1.png"
        width={width}
      />
      <div className={classes.space} />
      <img
        className={classes.logo}
        alt="box"
        src="./images/mobile/svg/m_game.svg"
        width={width}
      />
      <div className={classes.space} />
      <div
        className={classes.preordernow}
      >
        <PreOrderButton />
      </div>
      <div className={classes.space} />
      <div className={classes.space} />
      <Box
        textImgSrc="./images/mobile/svg/m_the holy city.svg"
        contentText="The city walls of Jerusalem are in ruins! The holy city and her Temple lay unprotected to the neighboring enemies. You and other players must work together to rebuild the city……or not!"
      />
      <div className={classes.space} />
      <Box
        textImgSrc="./images/mobile/svg/m_choose.svg"
        contentText="By strategically placing towers, bazaars, altars and domino walls around the Holy Temple, players can work together or compete with each other to determine the fate of the city."
      />
      <div className={classes.space} />
      <Box
        textImgSrc="./images/mobile/svg/m_relive.svg"
        contentText="52 Days is a 2-6 players board game with a wall-building & blocking mechanism that plays in 1 hour. Relive Biblical history with this fun and exciting action-strategic game!"
      />
    </div>
  );
};
