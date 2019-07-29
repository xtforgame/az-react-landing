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
    <section id="section04">
      <ol>
        <li id="dot0"><a><img src="Website/images/s04/dot.png" alt="dot0" /></a></li>
        <li id="dot1"><a><img src="Website/images/s04/dot.png" alt="dot1" /></a></li>
        <li id="dot2"><a><img src="Website/images/s04/dot.png" alt="dot2" /></a></li>
        <li id="dot3"><a><img src="Website/images/s04/dot.png" alt="dot3" /></a></li>
        <li id="dot4"><a><img src="Website/images/s04/dot.png" alt="dot4" /></a></li>
      </ol>
      <a id="pic"><img src="Website/images/s04/pic4.png" alt="s04-pic" /></a>
      <a id="arrow-left"><img src="Website/images/s04/arrow-left.png" alt="arrow-left" /></a>
      <a id="arrow-right"><img src="Website/images/s04/arrow-right.png" alt="arrow-right" /></a>
    </section>
  );
};
