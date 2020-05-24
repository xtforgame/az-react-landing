import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';

const useStyles = makeStyles(theme => ({
  topImageContainer: {
    width: '100%',
    height: 400,
    [theme.breakpoints.up('sm')]: {
      height: 520,
    },
    [theme.breakpoints.up('md')]: {
      height: 720,
    },
    [theme.breakpoints.up('lg')]: {
      height: 960,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1020,
    },
  },
  cardMedia: {
    position: 'absolute',
    // filter: 'brightness(0.5)',
  },
  texts: {
    zIndex: 900,
    top: 400,
    position: 'absolute',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(classes.topImageContainer)}>
      <CardMedia
        image="./images/desktop/jpg/bg1-100.jpg"
        title="Header"
        className={classnames(classes.topImageContainer, classes.cardMedia)}
      />
      <Left />
      <Right />
      <Bottom />
      {/* <div className={classnames(classes.topImageContainer, classes.texts)}>
        <Typography variant="h4" style={{ color: 'white', width: '100%', textAlign: 'center' }}>
          Az React Material UI
        </Typography>
        <Typography variant="h4" style={{ color: 'white', width: '100%', textAlign: 'center' }}>
          <br />
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            style={{
              borderWidth: 2,
              borderColor: theme.palette.primary.main,
            }}
          >
            立即開始
          </Button>
        </div>
      </div> */}
    </div>
  );
};
