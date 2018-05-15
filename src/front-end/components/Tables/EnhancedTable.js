import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow, TablePagination } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableActionMenuButton from './EnhancedTableActionMenuButton';
import ProgressWithMask from '~/components/Progress/ProgressWithMask';

const styles = theme => ({
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
  iconCell: {
    width: 48 + (12 * 2),
  },
  actionsCell: {
    width: 48 + (12 * 2),
    '&:last-child': {
      paddingRight: theme.spacing.unit * 1.5,
    },
  },
  detailCell: {
    backgroundColor: theme.palette.background.default,
  },
});

class EnhancedTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static updateState({ columns, rows = [], order, orderBy }){
    let sortedRows = [...rows];

    const columnMap = {};
    columns.map(column => {
      columnMap[column.id] = column;
    });

    let compare = (a, b, orderBy) => a[orderBy] < b[orderBy];
    if(columnMap[orderBy] && columnMap[orderBy].numeric){
      compare = (a, b, orderBy) => parseFloat(a[orderBy]) < parseFloat(b[orderBy]);
    }
    if(order && orderBy){
      sortedRows = order === 'desc'
        ? rows.sort((a, b) => (compare(b, a, orderBy) ? -1 : 1))
        : rows.sort((a, b) => (compare(a, b, orderBy) ? -1 : 1));
    }

    return {
      columns,
      columnMap,
      rows,
      order,
      orderBy,
    };
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if ((nextProps.rows && (nextProps.rows !== prevState.rows))
      || (nextProps.order && (nextProps.order !== prevState.order))
      || (nextProps.orderBy && (nextProps.orderBy !== prevState.orderBy))
      || (nextProps.columns && (nextProps.columns !== prevState.columns))
    ) {
      const rows = nextProps.rows || prevState.rows;
      const order = nextProps.order || prevState.order;
      const orderBy = nextProps.orderBy || prevState.orderBy;
      const columns = nextProps.columns || prevState.columns;

      return EnhancedTable.updateState({ columns, rows, order, orderBy });
    }

    // No state update necessary
    return null;
  }
  
  constructor(...args){
    super(...args);

    this.state = {
      page: 0,
      rowsPerPage: 5,
      expanded: {},
      ...EnhancedTable.updateState({
        columns: this.props.columns,
        rows: this.props.rows,
        order: 'asc',
        orderBy: this.props.defaultSortBy,
      }),
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleRequestSort = (_, property) => {
    let orderBy = property || this.props.defaultSortBy;
    let order = 'desc';

    if (this.state.orderBy === property) {
      if(this.state.order === 'desc'){
        order = 'asc';
      }else if(orderBy !== this.props.defaultSortBy){
        orderBy = this.props.defaultSortBy;
        order = 'asc';
      }else{
        order = 'desc';
      }
    }

    this.setState(EnhancedTable.updateState({
      columns: this.props.columns,
      rows: this.state.rows,
      order,
      orderBy,
    }));
  };

  toggleDetail(row) {
    if(this.state.expanded[row.id]){
      return this.setState({
        expanded: {},
      });
    }
    return this.setState({
      expanded: {
        [row.id]: true,
      },
    });
  }

  render() {
    const { classes, withDetail, getActionMenuItems, columns, loading, loadingRows } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.state.rows.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <EnhancedTableHead
            withDetail={withDetail}
            withActions={!!getActionMenuItems}
            columns={columns}
            sortTip="Sort"
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            {this.state.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              const expanded = this.state.expanded[row.id];
              const options = {
                columns,
              };
              return (
                <React.Fragment key={row.id}>
                  <TableRow>
                    { withDetail &&
                      <TableCell padding="checkbox" className={classes.iconCell}>
                        <IconButton
                          onClick={() => { this.toggleDetail(row); }}>
                          {expanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </IconButton>
                      </TableCell>
                    }
                    {columns.map(column => {
                      const renderFunction = row.renderCell || column.renderRowCell || ((columnId, row) => row[columnId]);
                      return (
                        <TableCell
                          key={column.id}
                          numeric={column.numeric}
                          padding={column.padding || 'default'}
                          className={column.cellClassName}
                        >{renderFunction(column.id, row, options)}</TableCell>
                      );
                    })}
                    { getActionMenuItems &&
                      <TableCell padding="checkbox" className={classes.actionsCell}>
                        <EnhancedTableActionMenuButton
                          getActionMenuItems={getActionMenuItems}
                        />
                      </TableCell>
                    }
                  </TableRow>
                  {withDetail && expanded && <TableRow>
                    <TableCell
                      colSpan={columns.length + (+withDetail) + (+!!getActionMenuItems)}
                      className={classes.detailCell}
                    >
                      {this.props.renderRowDetail && this.props.renderRowDetail(row, options)}
                    </TableCell>
                  </TableRow>}
                </React.Fragment>
              );
            })}
            {/* {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
          </TableBody>
        </Table>
        {!loading && loadingRows && <ProgressWithMask delay={100} />}
        <TablePagination
          component="div"
          count={this.state.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
        {loading && <ProgressWithMask delay={100} />}
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
