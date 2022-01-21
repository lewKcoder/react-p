import { useState, useEffect } from 'react';
import styles from './ExpenseItem.module.scss';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ id, title, amount, date }) => {
  return (
    <Card>
      <div className={`${styles.expense_item}`}>
        <ExpenseDate date={date} />
        <div className={styles.expense_item__description}>
          <h2>{title}</h2>
          <div className={styles.expense_item__price}>${amount}</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
