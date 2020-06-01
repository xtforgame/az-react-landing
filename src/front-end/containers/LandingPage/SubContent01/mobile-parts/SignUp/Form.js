import React, { useState } from 'react';
import classnames from 'classnames';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { useTranslation } from 'react-i18next';
// import { ThemeProvider } from '@material-ui/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { updatePageContext } from '~/styles/getPageContext';
import modelMapEx from '~/containers/App/modelMapEx';
import SendButton from '../shared/SendButton';

const {
  contactUsMessage,
} = modelMapEx.querchy.promiseActionCreatorSets;

// const width = 280;

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 900,
    top: 170,
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
  space: {
    flexShrink: 0,
    width: '100%',
    height: 20,
  },
  space2: {
    flexShrink: 0,
    width: '100%',
    height: 30,
  },
  inputTextBox: {
    height: 50,
    width: 300,
    fontSize: 12,
    fontWeight: 500,
    outline: 'none',
    border: 'solid',
    borderWidth: 1,
    padding: 12,
  },
  inputFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export default () => {
  const classes = useStyles();
  // const theme = useTheme();

  // const { t } = useTranslation(['builtin-components']);
  // console.log('classes :', classes);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [done, setDone] = useState('');

  // const [content, setContent] = useState('');
  // const [contentError, setContentError] = useState('');

  // const [open, setOpen] = React.useState(false);

  // function handleClickOpen() {
  //   setOpen(true);
  // }

  // function handleClose() {
  //   setOpen(false);
  // }


  const submit = () => {
    if (!name) {
      return setNameError('Please enter your name');
    }
    if (!email) {
      return setEmailError('Please enter your e-mail');
    } else if (!validateEmail(email)) {
      return setEmailError('Invalid Email');
    }
    // if (!content) {
    //   return setNameError('Content Required');
    // }
    return contactUsMessage.create({
      name,
      email,
      data: {},
    })
    .then(() => {
      setName('');
      setNameError('');
      setEmail('');
      setEmailError('');
      setDone('Your message has been sent successfully!');
      // setContent('');
      // setContentError('');
      // handleClickOpen();
    });
  };

  return (
    <div className={classnames(classes.container)}>
      <div className={classes.inputFlex}>
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          className={classes.inputTextBox}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError('');
            setDone('');
          }}
        />
        <div className={classes.space} />
        <input
          type="text"
          placeholder="ENTER YOUR E-MAIL ADDRESS"
          className={classes.inputTextBox}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
            setDone('');
          }}
        />
        <div className={classes.space2} />
        <SendButton onClick={submit} />
        {
          nameError && (
            <Typography color="error" variant="subtitle1">
              {nameError}
            </Typography>
          )
        }
        {
          emailError && (
            <Typography color="error" variant="subtitle1">
              {emailError}
            </Typography>
          )
        }
        {
          done && (
            <Typography style={{ color: '#856d23' }} variant="subtitle1">
              {done}
            </Typography>
          )
        }
        {/* <img
          alt="send"
          src="./images/mobile/svg/m_send.svg"
          // width={width}
          height={60}
        /> */}
      </div>
    </div>
  );
};
