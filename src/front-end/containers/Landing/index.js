/* eslint-disable no-undef, no-loop-func, react/self-closing-comp, jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */

import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';
import AppBar from './AppBar';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
}));

export default (props) => {
  const {
    routeView,
  } = props;

  const classes = useStyles();

  const { t } = useTranslation(['builtin-components']);

  useLayoutEffect(() => {
    // 選單使用的變數
    const menu = 'menu';
    const btnProduct = 'menu #btn-product';
    const btnLanguage = 'menu #btn-language';
    const area = 'menu .area';
    const areaProduct = 'menu #area-product';
    const areaLanguage = 'menu #area-language';

    // 移動裝置選單的變數
    const mBtnMenu = 'menu #btn-m-menu';
    const mBtnLanguage = 'menu #btn-m-language';
    const mArea = 'menu .area-m';
    const mAreaMenu = 'menu #area-m-menu';
    const mAreaLanguage = 'menu #area-m-language';

    // 產品預覽器使用的變數
    const picMax = 5;
    let picNum = 4;
    const pic = '#section04 #pic img';
    const arrowLeft = '#section04 #arrow-left';
    const arrowRight = '#section04 #arrow-right';
    const dot = '#section04 #dot';

    // 選單前置
    $(btnProduct).mouseenter(btnProductEnter);
    $(btnLanguage).mouseenter(btnLanguageEnter);
    $(menu).mouseleave(menuLeave);

    // 移動裝置選單前置
    $(mBtnMenu).click(mBtnMenuClick);
    $(mBtnLanguage).click(mBtnLanguageClick);
    $(mArea).click(mAreaClick);

    // 產品預覽前置
    $(arrowLeft).css('opacity', 0.5);
    $(arrowRight).css('opacity', 0.5);
    $(pic).click(arrowRightClick);

    $(arrowLeft).click(arrowLeftClick);
    $(arrowRight).click(arrowRightClick);
    for (let i = 0; i < picMax; i++) {
      if (i === picNum) { $(dot + i).css('opacity', 1); } else { $(dot + i).css('opacity', 0.5); }
      $(dot + i).click(() => {
        $(dot + picNum).animate({ opacity: 0.5 });
        changePic(i);
      });
    }

    function btnProductEnter() {
      menuLeave();
      $(areaProduct).css('opacity', '0');
      $(areaProduct).css('display', 'inline');
      $(areaProduct).animate({ opacity: 1 });
    }

    function btnLanguageEnter() {
      menuLeave();
      $(areaLanguage).css('opacity', '0');
      $(areaLanguage).css('display', 'inline');
      $(areaLanguage).animate({ opacity: 1 });
    }

    function menuLeave() {
      $(area).css('display', 'none');
    }

    function mBtnMenuClick() {
      mAreaClick();
      $(mAreaMenu).css('opacity', '0');
      $(mAreaMenu).css('display', 'inline');
      $(mAreaMenu).animate({ opacity: 1 });
    }

    function mBtnLanguageClick() {
      mAreaClick();
      $(mAreaLanguage).css('opacity', '0');
      $(mAreaLanguage).css('display', 'inline');
      $(mAreaLanguage).animate({ opacity: 1 });
    }

    function mAreaClick() {
      $(mArea).css('display', 'none');
    }

    function arrowLeftClick() {
      if (picNum - 1 >= 0) {
        $(dot + picNum).animate({ opacity: 0.5 });
        changePic(picNum - 1);
      }
    }

    function arrowRightClick() {
      if (picNum + 1 < picMax) {
        $(dot + picNum).animate({ opacity: 0.5 });
        changePic(picNum + 1);
      }
    }

    function changePic(value) {
      if (value !== 0 && value !== picMax - 1) {
        $(arrowLeft).css('opacity', 0.5);
        $(arrowRight).css('opacity', 0.5);
      } else if (value === 0) { $(arrowLeft).css('opacity', 0.2); } else if (value === picMax - 1) { $(arrowRight).css('opacity', 0.2); }
      $(pic).animate({ opacity: 0 }, () => {
        $(pic).attr('src', `images/s04/pic${value}.png`);
        $(pic).animate({ opacity: 1 });
        $(dot + value).animate({ opacity: 1 });
      });
      picNum = value;
    }
  }, []);

  // console.log('classes :', classes);
  return (
    <div id="wrapper">
      <header></header>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />

      <AppBar />
      <Footer />
    </div>
  );
};
