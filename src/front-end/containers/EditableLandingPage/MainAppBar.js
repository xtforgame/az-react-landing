// @flow weak

import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import { grey } from '@material-ui/core/colors';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import LocaleDropdown from '~/containers/LocaleDropdown';
// import UserInfoDropdown from '~/containers/UserInfoDropdown';
import createCommonStyles from 'azrmui/styles/common';

import MainAppMenu from './MainAppMenu';

const styles = theme => ({
  root: {
    // marginTop: theme.spacing(3),
    position: 'relative',
    width: '100%',
  },
  ...createCommonStyles(theme, ['flex', 'appBar']),
});

const MainAppBar = (props) => {
  const {
    t,
    classes,
    className,
    isUserLoggedIn = true,
    onToggleMenu = () => {},
  } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <AppBar position="fixed" className={className} style={{ background: grey[900] }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Toolbar>
          <img
            src="./images/logo2.png"
            width={64}
            style={{ marginRight: 20 }}
          />
          <Typography variant="h6" color="inherit" className={classes.flex1}>
            {/* {t('appTitle')} */}
          </Typography>
          <LocaleDropdown />
          {/* <Button color="inherit" onClick={() => clearSessionCache('me')}>
            <FormattedMessage {...messages.logout} />
          </Button> */}
          {/* {isUserLoggedIn && (
            <UserInfoDropdown />
          )} */}
          <IconButton
            color="inherit"
            onClick={() => {
              setExpanded(!expanded);
            }}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              background: '#FFFFFF',
              color: '#000000',
            }}
          >
            <MainAppMenu />
          </div>
        </Collapse>
      </div>
    </AppBar>
  );
};


export default compose(
  connect(
    state => ({}),
    {}
  ),
  withTranslation(['app-common']),
  withStyles(styles),
)(MainAppBar);
