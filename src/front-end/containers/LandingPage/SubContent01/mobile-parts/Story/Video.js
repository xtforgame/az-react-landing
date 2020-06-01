import React, { useState } from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Box from './Box';

const width = '100%';

const useStyles = makeStyles(theme => ({
  container: {
    width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  space: {
    width,
    height: 20,
    flexShrink: 0,
  },
  gradient: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  frame: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  video: {
    width: 320,
    height: 180,
  },
  videoOverlay: {
    position: 'absolute',
    width: 320,
    height: 180,
  },
  content: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  contentText: {
    width: '125%',
    color: 'black',
    fontSize: 12,
    transformOrigin: 'top left',
    transform: 'scale(0.8)',
  },
}));

export default ({ videoImgSrc }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [showVideoImage, setShowVideoImage] = useState(true);
  return (
    <div className={classnames(classes.container)}>
      {
        showVideoImage && (
          <img
            className={classes.video}
            alt="text"
            src="./images/mobile/png/m_video 320 180.png"
            width={320}
            height={180}
          />
        )
      }
      {
        showVideoImage && (
          <img
            className={classes.videoOverlay}
            alt="text"
            src="./images/mobile/svg/m_video btn.svg"
            width={320}
            height={180}
            onClick={() => setShowVideoImage(false)}
          />
        )
      }
      {
        !showVideoImage && (
          <div className={classes.videoOverlay}>
            <YouTube
              videoId="lJfW02T6Lys"
              opts={{
                width: 320,
                height: 180,
                playerVars: { // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                },
              }}
              onReady={() => {
                console.log('onReady');
              }}
              onEnd={() => {
                setShowVideoImage(true);
              }}
            />
          </div>
        )
      }
      <div
        className={classes.space}
      />
      <Box />
    </div>
  );
};
