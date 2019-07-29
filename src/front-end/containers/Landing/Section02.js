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
    <section id="section02">
      <h1>遊戲概要</h1>
      <a id="hr"></a>
      <article id="pc">
        <p>在寧靜的伯利恆城外，一位行神蹟奇事的小王子即將誕生。</p>
        <p>為了得到一生的祝福，先知牧羊人們紛紛拾起了手杖，</p>
        <p>召集了他們的牧羊犬和羊群，動身趕往那夜空中最閃耀的星光之下！</p>
        <br />
        <p>《伯利恆之星》是一款輕鬆簡易適合全家同樂的桌上遊戲。</p>
        <p>玩家扮演在荒地中游牧的牧羊人，透過簡單地丟擲動作派出牧羊犬，</p>
        <p>尋覓新的水草之地以繁衍更多羊隻，</p>
        <p>而遊戲結束時擁有最多羊的玩家將獲得勝利與祝福！</p>
      </article>
      <article id="m">
        <p>《伯利恆之星》是款輕鬆簡易適合全家同樂的桌上遊戲。</p>
        <p>　</p>
        <p>玩家扮演在荒地中游牧的牧羊人，並透過簡單地丟擲動作派出牧羊犬，尋覓新的水草之地以繁衍更多羊隻，而遊戲結束時擁有最多羊的玩家將獲得勝利與祝福！</p>
      </article>
    </section>
  );
};
