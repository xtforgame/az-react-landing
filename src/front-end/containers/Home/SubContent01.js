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
import TableAppBar from '~/components/Tables/TableAppBar';
import EnhancedTable from '~/components/Tables/EnhancedTable';
import SimpleTabs from './SimpleTabs';
import Chip from '@material-ui/core/Chip';
import createCommonStyles from '~/styles/common';

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

function createData(id, name, calories, fat, carbs, protein) {
  return {
    id, name, calories, fat, carbs, protein, expanded: false,
  };
}

const createList = () => [
  createData(0, 'Cupcake', '305', 3.7, 67, 4.3),
  createData(1, 'Donut', '452', 25.0, 51, 4.9),
  createData(2, 'Eclair', '262', 16.0, 24, 6.0),
  createData(3, 'Frozen yoghurt', '159', 6.0, 24, 4.0),
  createData(4, 'Gingerbread', '356', 16.0, 49, 3.9),
  createData(5, 'Honeycomb', '408', 3.2, 87, 6.5),
  createData(6, 'Ice cream sandwich', '237', 9.0, 37, 4.3),
  createData(7, 'Jelly Bean', '375', 0.0, 94, 0.0),
  createData(8, 'KitKat', '518', 26.0, 65, 7.0),
  createData(9, 'Lollipop', '392', 0.2, 98, 0.0),
  createData(10, 'Marshmallow', '318', 0, 81, 2.0),
  createData(11, 'Nougat', '360', 19.0, 9, 37.0),
  createData(12, 'Oreo', '437', 18.0, 63, 4.0),
];

const SubContent01 = (props) => { // eslint-disable-line react/prefer-stateless-function
  const {
    subscriptionHierarchy,
    getSubscriptions,
  } = props;

  const collection = (subscriptionHierarchy && subscriptionHierarchy.collection) || [];
  const getColumnData = () => {
    return [
      {
        id: 'name', numeric: false, padding: 'none', label: 'Name',
      },
      { id: 'email', numeric: false, label: 'E-mail' },
    ];
  };

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
