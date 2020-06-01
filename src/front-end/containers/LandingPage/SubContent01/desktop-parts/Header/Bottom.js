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
    top: '70%', // 480,
    width: '100%',
    height: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  around: {
    flex: 3,
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
      <div className={classes.around} />
      <Box
        textImgSrc="./images/desktop/svg/the holy city.svg"
        contentText="The city walls of Jerusalem are in ruins! The holy city and her Temple lay unprotected to the neighboring enemies. You and other players must work together to rebuild the city……or not!"
      />
      <div className={classes.space} />
      <Box
        textImgSrc="./images/desktop/svg/choose.svg"
        contentText="By strategically placing towers, bazaars, altars and domino walls around the Holy Temple, players can work together or compete with each other to determine the fate of the city."
      />
      <div className={classes.space} />
      <Box
        textImgSrc="./images/desktop/svg/relive.svg"
        contentText="52 Days is a 2-6 players board game with a wall-building & blocking mechanism that plays in 1 hour. Relive Biblical history with this fun and exciting action-strategic game!"
      />
      <div className={classes.around} />
    </div>
  );
};
