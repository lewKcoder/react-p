import React from 'react';
import styles from './ExpenseDate.module.scss';

function ExpenseDate({ date }) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div className={styles.expense_date}>
      <div className={styles.expense_date__month}>{month}</div>
      <div className={styles.expense_date__day}>{day}</div>
      <div className={styles.expense_date__year}>{year}</div>
    </div>
  );
}

export default ExpenseDate;
