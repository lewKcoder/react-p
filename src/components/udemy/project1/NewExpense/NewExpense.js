import React from 'react';
import styles from './NewExpense.module.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const onSaveExpanseDateHandler = (enteredExpenseData) => {
    const expanseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expanseData);
  };

  return (
    <div className={styles.new_expense}>
      <ExpenseForm onSaveExpanseDate={onSaveExpanseDateHandler} />
    </div>
  );
};

export default NewExpense;
