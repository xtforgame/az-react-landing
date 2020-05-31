import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = 830;

const useStyles = makeStyles(theme => ({
  container: {
    width,
    height: 1,
    position: 'relative',
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
    top: (370 - 290) / 2,
    left: (370 - 290) / 2,
    position: 'absolute',
  },
  content: {
    top: 0,
    left: 0,
    paddingTop: (370 - 290) / 2,
    paddingLeft: 580,
    paddingRight: (370 - 290) / 2,
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
  return (
    <div className={classnames(classes.container)}>
      <img
        className={classes.gradient}
        alt="gradient"
        src="./images/desktop/svg/gradient 1660.svg"
        width={width}
      />
      <img
        className={classes.frame}
        alt="frame"
        src="./images/desktop/svg/frame 1660.svg"
        width={width}
      />
      <img
        className={classes.video}
        alt="text"
        src="./images/desktop/png/video.png"
        width={513}
      />
      <div
        className={classes.content}
      >
        <div className={classes.contentText}>
          It is the year 444 BC, during the Second Temple period in Jewish history. The city of Jerusalem lay unprotected from neighboring enemies, because its city walls had been destroyed.
        </div>
        <div className={classes.contentText}>
          Nehemiah, the cup-bearer to the king of Persia, returned to the holy city with a mission: to rebuild the city walls of Jerusalem, and the Jewish community living there. But he must act quickly, because the surrounding enemies will try everything to stop him.
        </div>
        <div className={classes.contentText}>
          Nehemiah rallied together the remnant of Jews in Judah. They worked night and day to rebuild the gates and walls of Jerusalem, while keeping a lookout for enemy attack. At the end, the city walls were fully restored, and the people of Jerusalem and her Temple are now safe. Nehemiah had achieved his mission within 52 days.
        </div>
      </div>
    </div>
  );
};
