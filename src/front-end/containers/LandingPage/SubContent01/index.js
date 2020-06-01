import React from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SimpleMediaCard from './SimpleMediaCard';
import Section from './Section';
import Member from './Member';
import Contact from './Contact';

import DesktopHeader from './desktop-parts/Header';
import DesktopInBox from './desktop-parts/InBox';
import DesktopStory from './desktop-parts/Story';
import DesktopPacks from './desktop-parts/Packs';
import DesktopSignUp from './desktop-parts/SignUp';
import DesktopFooter from './desktop-parts/Footer';

import MobileHeader from './mobile-parts/Header';
import MobileInBox from './mobile-parts/InBox';
import MobileStory from './mobile-parts/Story';
import MobilePacks from './mobile-parts/Packs';
import MobileSignUp from './mobile-parts/SignUp';
import MobileFooter from './mobile-parts/Footer';

const useStyles = makeStyles(theme => ({
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  console.log('matches :', matches);
  if (matches) {
    return (
      <div>
        <DesktopHeader />
        <DesktopInBox />
        <DesktopStory />
        <DesktopPacks />
        <DesktopSignUp />
        <DesktopFooter />
      </div>
    );
  }
  return (
    <div>
      <MobileHeader />
      <MobileInBox />
      <MobileStory />
      <MobilePacks />
      <MobileSignUp />
      <MobileFooter />
    </div>
  );
};
