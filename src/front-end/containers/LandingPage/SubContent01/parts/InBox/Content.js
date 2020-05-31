import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import PreOrderButton from '../shared/PreOrderButton';

const width = 280;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: 100,
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
  topSpace: {
    flexShrink: 0,
    width: '100%',
    height: 90,
  },
  space: {
    flexShrink: 0,
    width: '100%',
    height: 5,
  },
  ul: {
    color: 'white',
  },
  li: {
    margin: '0',
    padding: '4px 0 4px 16px',
    listStyle: 'none',
    backgroundImage: 'url("./images/desktop/svg/b2.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    backgroundSize: 8,
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
          src="./images/desktop/png/image2.png"
          width={600}
        />
      </div>
      <div className={classes.space} />
      <div className={classnames(classes.container2)}>
        <ul className={classes.ul}>
          <li className={classes.li}>1 Scoreboard</li>
          <li className={classes.li}>48 Construction Cards</li>
          <li className={classes.li}>1 Temple Tile</li>
          <li className={classes.li}>1 City Gate Tile</li>
          <li className={classes.li}>18 Worker Tokens</li>
          <li className={classes.li}>6 Score Tokens</li>
          <li className={classes.li}>64 Wall Tokens</li>
        </ul>
      </div>
      <div className={classnames(classes.container2)}>
        <PreOrderButton />
      </div>
      <div className={classnames(classes.container2)}>
        <img
          alt="subtitle"
          src="./images/desktop/svg/plus.svg"
          width={160}
        />
      </div>
    </div>
  );
};
