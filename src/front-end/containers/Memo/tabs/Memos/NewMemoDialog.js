import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import BreakAllCodeBlock from 'azrmui/core/Text/BreakAllCodeBlock';
import Button from '@material-ui/core/Button';
import createCommonStyles from 'azrmui/styles/common';
import SimpleFullScreenDialog from 'azrmui/core/Dialogs/SimpleFullScreenDialog';
import {
  FormTextField,
} from 'azrmui/core/FormInputs';
import modelMapEx from '~/containers/App/modelMapEx';

const {
  memo,
} = modelMapEx.querchy.promiseActionCreatorSets;

const styles = theme => ({
  ...createCommonStyles(theme, ['flex']),
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    overflowX: 'hidden',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    background: theme.palette.background.default,
    padding: 8,
  },
  spacing: {
    width: 1,
    height: 16,
  },
});

class NewMemoDialog extends React.PureComponent {
  state = {
    memoText: '',
  }

  render() {
    const {
      classes,
      open,
      onClose,
    } = this.props;

    return (
      <SimpleFullScreenDialog
        title="New Memo"
        open={open}
        onClose={onClose}
        headerContent={(
          <Button
            color="inherit"
            onClick={() => {
              memo.create({
                title: 'Backup Check',
                executor: {
                  id: 'backup-bot',
                  name: 'Backup Bot',
                },
                creator: {
                  id: 'backup-bot',
                  name: 'Backup Bot',
                },
                timeTrigger: new Date().getTime(),
                // nextScheduledTime: new Date().getTime(),
                createdTime: new Date().getTime(),
              })
              .then(() => {
                memo.getCollection();
                onClose();
              })
              .catch((e) => {
                console.error('e :', e);
              });
            }}
          >
            save
          </Button>
        )}
      >
        <div className={classes.root}>
          <Paper className={classes.paperRoot} elevation={1}>
            {/* <Typography component={BreakAllCodeBlock} variant="body1" className={classes.flex1}>
              {JSON.stringify(result, null, 2)}
            </Typography> */}
            <FormTextField
              id="article"
              label="Memo..."
              multiline
              fullWidth
              rows={2}
              rowsMax={12}
              value={this.state.memoText || ''}
              onChange={(e) => {
                this.setState({
                  memoText: e.target.value,
                });
              }}
            />
            <div className={classes.spacing} />
            <div className={classes.flex1} />
            <div className={classes.flexContainerFW}>
              <Button
                onClick={() => {
                  onClose();
                }}
              >
                cancel
              </Button>
              <div className={classes.flex1} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  memo.create({
                    title: this.state.memoText || 'Backup Check',
                    executor: {
                      id: 'backup-bot',
                      name: 'Backup Bot',
                    },
                    creator: {
                      id: 'backup-bot',
                      name: 'Backup Bot',
                    },
                    timeTrigger: new Date().getTime(),
                    // nextScheduledTime: new Date().getTime(),
                    createdTime: new Date().getTime(),
                  })
                  .then(() => {
                    memo.getCollection();
                    onClose();
                  })
                  .catch((e) => {
                    console.error('e :', e);
                  });
                }}
              >
                save
              </Button>
            </div>
          </Paper>
        </div>
      </SimpleFullScreenDialog>
    );
  }
}


export default compose(
  withStyles(styles),
)(NewMemoDialog);
