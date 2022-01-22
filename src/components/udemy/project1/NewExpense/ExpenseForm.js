import { useState } from 'react';
import styles from './ExpenseForm.module.scss';

const ExpenseForm = ({ onSaveExpanseDate }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isOpenNewExpense, setIsOpenNewExpense] = useState(false);
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpanseDate(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const openNewExpenseHandler = () => {
    setIsOpenNewExpense(!isOpenNewExpense);
  };

  return (
    <>
      {isOpenNewExpense ? (
        <form onSubmit={submitHandler}>
          <div className={styles.new_expense__controls}>
            <div className={styles.new_expense__control}>
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className={styles.new_expense__control}>
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className={styles.new_expense__control}>
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                min="2018-01-01"
                max="2023-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className={styles.new_expense__actions}>
            <button onClick={openNewExpenseHandler}>Chancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={openNewExpenseHandler}>Add New Expense</button>
      )}
    </>
  );
};

export default ExpenseForm;
