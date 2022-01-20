import React from 'react';
import styles from './NewExpense.module.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <div className={styles.new_expense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
