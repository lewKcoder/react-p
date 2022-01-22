import React from 'react';
import ExpenseItem from './ExpenseItem';
import styles from './ExpenseList.module.scss';

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className={styles.expenses_list__fallback}>Found no expenses.</h2>;
  }
  const expense = items.map((item, i) => <ExpenseItem {...item} key={i} />);

  return <ul className={styles.expenses_list}>{expense}</ul>;
};

export default ExpensesList;
