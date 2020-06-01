import React, { useState } from 'react';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const width = 280;

const useStyles = makeStyles(theme => ({
  container: {
    width,
    height: 83,
    position: 'relative',
  },
  preordernow: {
    top: 0,
    position: 'absolute',
    transitionProperty: 'transform',
    transitionDuration: '0.3s',
  },
  preordernowhover: {
    top: 0,
    transform: 'translate(2px, -8px)',
    transitionProperty: 'transform',
    transitionDuration: '0.3s',
    position: 'absolute',
  },
}));

export default ({ style }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [hover, setHover] = useState(false)

  return (
    <div
      style={style}
      className={classnames(classes.container)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        const elem = document.getElementById("sign-up");
        elem.scrollIntoView();
      }}
    >
      <img
        className={hover ? classes.preordernowhover : classes.preordernow}
        alt="subtitle"
        src="./images/desktop/svg/pre-order now.svg"
        width={width}
      />
    </div>
  );
};
