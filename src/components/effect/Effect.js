import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import styles from './Effect.module.scss';

const Effect = () => {
  const icons = [];
  for (let i = 0; i < 1; i++) {
    icons.push(<ArrowRightIcon width="20px"></ArrowRightIcon>);
    icons.push(
      <div>
        <div className={styles.line}></div>
      </div>
    );
    icons.push(
      <div>
        <img src="/Vector.png" alt="" />
      </div>
    );
    icons.push(
      <div>
        <img src="/Vector.svg" alt="" />
      </div>
    );
  }
  return (
    <>
      <div className={styles.row}>
        <div>{icons}</div>
      </div>
      <div className={styles.hover_arrow}>
        <ArrowRightIcon width="50px" className={styles.arrow}></ArrowRightIcon>
      </div>
    </>
  );
};

export default Effect;
