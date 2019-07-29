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
    <section id="section03">
      <a id="enter"></a>
      <a id="icon-info"></a>
    </section>
  );
};
