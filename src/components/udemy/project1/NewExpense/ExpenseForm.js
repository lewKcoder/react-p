import React from 'react';
import styles from './ExpenseForm.module.scss';

const ExpenseForm = () => {
  const titleChangeHandler = () => {
    console.log('title change');
  };

  return (
    <form>
      <div className={styles.new_expense__controls}>
        <div className={styles.new_expense__control}>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className={styles.new_expense__control}>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className={styles.new_expense__control}>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className={styles.new_expense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
