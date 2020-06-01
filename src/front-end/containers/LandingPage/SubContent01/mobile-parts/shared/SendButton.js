import React, { useState } from 'react';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const width = 110;

const useStyles = makeStyles(theme => ({
  container: {
    width,
    height: 60,
    position: 'relative',
  },
  sendnow: {
    top: 0,
    position: 'absolute',
    transitionProperty: 'transform',
    transitionDuration: '0.3s',
  },
  sendnowhover: {
    top: 0,
    transform: 'translate(2px, -8px)',
    transitionProperty: 'transform',
    transitionDuration: '0.3s',
    position: 'absolute',
  },
}));

export default ({ style, onClick }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [hover, setHover] = useState(false)

  return (
    <div
      style={style}
      className={classnames(classes.container)}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className={hover ? classes.sendnowhover : classes.sendnow}
        alt="subtitle"
        src="./images/mobile/svg/m_send.svg"
        width={width}
      />
    </div>
  );
};
