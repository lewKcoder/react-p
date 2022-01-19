import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  return <div className={`${styles.card} ${styles.expense_item}`}>{props.children}</div>;
}

export default Card;
