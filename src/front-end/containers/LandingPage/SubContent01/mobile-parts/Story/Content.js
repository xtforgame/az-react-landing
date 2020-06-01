import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Box from './Box';

const width = 280;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: 220,
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
    height: 30,
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.container)}>
      <div className={classnames(classes.container2)}>
        <img
          className={classes.title}
          alt="title"
          src="./images/mobile/svg/m_the story behind.svg"
          width={600}
        />
      </div>
      <div className={classes.space} />
      <div className={classnames(classes.container2)}>
        <Box />
      </div>
      {/* <div
        style={{ maxWidth: 900, margin: '0px auto 0px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}
      >
        <YouTube
          videoId="wZZ7oFKsKzY"
          opts={{
            width: 300,
            height: 200,
            playerVars: { // https://developers.google.com/youtube/player_parameters
              // autoplay: 1,
            },
          }}
          onReady={() => {
            console.log('onReady');
          }}
        />
      </div> */}
    </div>
  );
};
