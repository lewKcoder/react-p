import React from 'react';
import styles from './PSCSS1.module.scss';

const PSCSS = () => {
  return (
    <div className={styles.keyboard}>
      <div>
        <button className={styles.button1}>あ</button>
        <button className={styles.button2}>い</button>
        <button className={styles.button3}>う</button>
        <button className={styles.button4}>え</button>
        <button className={styles.button5}>お</button>
      </div>
      <div>
        <button className={styles.button6}>か</button>
        <button className={styles.button7}>き</button>
        <button className={styles.button8}>く</button>
        <button className={styles.button9}>け</button>
        <button className={styles.button10}>こ</button>
      </div>
      <div>
        <button className={styles.button11}>さ</button>
        <button className={styles.button12}>し</button>
        <button className={styles.button13}><span>す</span></button>
        <button className={styles.button14}>せ</button>
        <button className={styles.button15}>そ</button>
      </div>
      <div>
        <button className={styles.button16}>た</button>
        <button className={styles.button17}>ち</button>
        <button className={styles.button18}>つ</button>
        <button className={styles.button19}>て</button>
        <button className={styles.button20}>と</button>
      </div>
      <div>
        <button className={styles.button21}>な</button>
        <button className={styles.button22}>に</button>
        <button className={styles.button23}>ぬ</button>
        <button className={styles.button24}>ね</button>
        <button className={styles.button25}>の</button>
      </div>
      <div>
        <button className={styles.button26}>は</button>
        <button className={styles.button27}>ひ</button>
        <button className={styles.button28}>ふ</button>
        <button className={styles.button29}>へ</button>
        <button className={styles.button30}>ほ</button>
      </div>
    </div>
  );
};

export default PSCSS;
