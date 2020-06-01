import React, { useState } from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const width = '100%';

const useStyles = makeStyles(theme => ({
  container: {
    width,
    height: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  gradient: {
    width: 304,
    position: 'absolute',
  },
  frame: {
    width: 304,
    position: 'absolute',
  },
  content: {
    width: 304,
    position: 'relative',
  },
  contentText: {
    width: '100%',
    paddingTop: (304 - 240) / 2,
    paddingLeft: (304 - 240) / 2,
    paddingRight: (304 - 240) / 2,
    color: 'black',
    // fontSize: 12,
    // transformOrigin: 'top left',
    // transform: 'scale(0.8)',
  },
}));

export default ({ videoImgSrc }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [showVideoImage, setShowVideoImage] = useState(true);
  return (
    <div className={classnames(classes.container)}>
      <img
        className={classes.gradient}
        alt="gradient"
        src="./images/mobile/svg/m_gradient 304 650.svg"
        width={304}
      />
      <img
        className={classes.frame}
        alt="frame"
        src="./images/mobile/svg/m_frame 304 650.svg"
        width={304}
      />
      <div
        className={classes.content}
      >
        <div className={classes.contentText}>
          It is the year 444 BC, during the Second Temple period in Jewish history. The city of Jerusalem lay unprotected from neighboring enemies, because its city walls had been destroyed.
        </div>
        <br />
        <div className={classes.contentText}>
          Nehemiah, the cup-bearer to the king of Persia, returned to the holy city with a mission: to rebuild the city walls of Jerusalem, and the Jewish community living there. But he must act quickly, because the surrounding enemies will try everything to stop him.
        </div>
        <br />
        <div className={classes.contentText}>
          Nehemiah rallied together the remnant of Jews in Judah. They worked night and day to rebuild the gates and walls of Jerusalem, while keeping a lookout for enemy attack. At the end, the city walls were fully restored, and the people of Jerusalem and her Temple are now safe. Nehemiah had achieved his mission within 52 days.
        </div>
      </div>
    </div>
  );
};
