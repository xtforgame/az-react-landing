/* eslint-disable no-undef, no-loop-func, react/self-closing-comp, jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
}));

export default (props) => {
  const classes = useStyles();

  const { t } = useTranslation(['builtin-components']);

  return (
    <footer>
      <a id="icon-logo"></a>
      <a id="icon-scoop"></a>
      <h1>©2017 獨家文化股份有限公司 版權所有。</h1>
      <h2>©2017 SCOOP CREATIVE COMPANY.</h2>
      <a id="icon-xoanz"></a>
      <h3>DESIGN BY XOANZ GAMES×DESIGN INC.</h3>
    </footer>
  );
};
