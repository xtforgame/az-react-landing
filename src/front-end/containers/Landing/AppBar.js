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
    <menu>
      <a id="logo" href="http://www.scoop.games"><img src="Website/images/menu/logo.png" alt="logo" /></a>

      <div className="frame" id="frame-left">
        <h1 className="btn-left" id="btn-product">桌遊產品</h1>
        <h1 className="btn-right" id="btn-blessing">取得祝福</h1>
        <div className="hr"></div>
      </div>
      <div className="frame" id="frame-right">
        <h1 className="btn-left" id="btn-contact">聯絡我們</h1>
        <h1 className="btn-right" id="btn-language">繁體中文</h1>
        <div className="hr"></div>
      </div>
      <div className="area" id="area-product">
        <div className="hr" id="hr0"></div>
        <div className="hr" id="hr1"></div>
        <div className="frame" id="frame-sob">
          <a><img src="Website/images/menu/icon-sob.png" alt="icon-sob" /></a>
        </div>
        <div className="frame" id="frame-52d">
          <a><img src="Website/images/menu/icon-52d.png" alt="icon-52d" /></a>
        </div>
        <div className="frame" id="frame-toa">
          <a><img src="Website/images/menu/icon-toa.png" alt="icon-toa" /></a>
        </div>
      </div>
      <div className="area" id="area-language">
        <div className="hr" id="hr0"></div>
        <h2 id="btn-zhtw">繁體中文</h2>
        <h2 id="btn-enus">English US</h2>
      </div>

      <a className="btn-m" id="btn-m-menu"></a>
      <a className="btn-m" id="btn-m-language"></a>
      <div className="area-m" id="area-m-menu">
        <div className="hr" id="hr0"></div>
        <div className="hr" id="hr1"></div>
        <div className="hr" id="hr2"></div>
        <div className="hr" id="hr3"></div>
        <h3 id="btn-m-sob">《伯利恆之星》</h3>
        <h3 id="btn-m-52d">《五十二日》</h3>
        <h3 id="btn-m-toa">《縱傲之塔》</h3>
        <h3 id="btn-m-contact">聯絡我們</h3>
        <h3 id="btn-m-blessing">取得祝福</h3>
      </div>
      <div className="area-m" id="area-m-language">
        <div className="hr" id="hr0"></div>
        <h3 id="btn-m-zhtw">繁體中文</h3>
        <h3 id="btn-m-enus">English US</h3>
      </div>
    </menu>
  );
};
