import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SimpleMediaCard from './SimpleMediaCard';

const styles = theme => ({
  placeholder: {
    height: 40,
  },
  mainContainer: {
    margin: 8,
    [theme.breakpoints.up('sm')]: {
      margin: 40,
    },
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  cardWrapper: {
    margin: 8,
  },
  icon: {
    fontSize: 24,
  },
  listFull: {
    width: 'auto',
  },
});

class Home extends React.PureComponent {
  render() {
    const {
      routeView, t, greetName, classes,
    } = this.props;

    return (
      <div className={classes.mainContainer}>
        <Typography variant="h2">
          Home
        </Typography>
        <Divider />
        <div className={classes.placeholder} />
        { routeView }
      </div>
    );
  }
}

export default compose(
  connect(
    state => ({
      greetName: state.get('global').greetName,
    }),
  ),
  withTranslation(['app-common']),
  withStyles(styles),
)(Home);
