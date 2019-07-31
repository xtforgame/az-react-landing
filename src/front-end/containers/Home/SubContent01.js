import React, { useEffect } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import TableAppBar from '~/components/Tables/TableAppBar';
import EnhancedTable from '~/components/Tables/EnhancedTable';
import createCommonStyles from '~/styles/common';
import SimpleTabs from './SimpleTabs';

import modelMap from '~/containers/App/modelMap';

const {
  getSubscriptions,
} = modelMap.waitableActions;

const {
  makeSubscriptionHierarchySelector,
} = modelMap.selectors;

const useStyles = makeStyles(theme => ({
  ...createCommonStyles(theme, ['flex', 'appBar']),
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  paper: {
    width: '100%',
  },
  detailCell: {
    backgroundColor: theme.palette.background.default,
  },
}));

const SubContent01 = (props) => { // eslint-disable-line react/prefer-stateless-function
  const {
    subscriptionHierarchy,
    getSubscriptions,
  } = props;

  const collection = (subscriptionHierarchy && subscriptionHierarchy.collection) || [];
  const getColumnData = () => ([
    {
      id: 'name', numeric: false, padding: 'none', label: 'Name',
    },
    { id: 'email', numeric: false, label: 'E-mail' },
  ]);

  const rows = collection.map(({ id, name, email }) => ({
    id, name, email,
  }));

  const classes = useStyles();

  useEffect(() => {
    getSubscriptions();
  }, []);

  return (
    <Paper className={classes.root}>
      <TableAppBar>
        <div className={classes.flex1} />
        <Chip
          label={`Search for '${'xxxxxxxxxxxxxxxxxxxxxxxxx'}'`}
          onDelete={() => {}}
          className={classes.appBarChip}
        />
        <IconButton color="inherit" onClick={() => {}} aria-label="refresh">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => {}} aria-label="refresh">
          <RefreshIcon />
        </IconButton>
      </TableAppBar>
      <EnhancedTable
        withDetail
        getActionMenuItems={closeMenu => ([
          <MenuItem
            key="edit"
            onClick={() => {
              // console.log('Edit');
              closeMenu();
            }}
          >
            Edit
          </MenuItem>,
          <MenuItem
            key="delete"
            onClick={() => {
              // console.log('Delete');
              closeMenu();
            }}
          >
            Delete
          </MenuItem>,
        ])}
        defaultSortBy="id"
        columns={getColumnData()}
        rows={rows}
        renderRowDetail={
          (row, { columns }) => (
            <Paper className={classes.paper}>
              <SimpleTabs row={row} columns={columns} />
            </Paper>
          )
        }
      />
    </Paper>
  );
};

const mapStateToProps = createStructuredSelector({
  subscriptionHierarchy: makeSubscriptionHierarchySelector(),
});

export default compose(
  connect(mapStateToProps, {
    getSubscriptions,
  }),
)(SubContent01);
