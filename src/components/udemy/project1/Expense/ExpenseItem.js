import { useState, useEffect } from 'react';
import styles from './ExpenseItem.module.scss';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ id, title, amount, date }) => {
  const [itemTitle, setItemTitle] = useState(title);

  const clickHandler = () => {
    setItemTitle('123456');
  };

  return (
    <Card>
      <div className={`${styles.expense_item}`}>
        <ExpenseDate date={date} />
        <div className={styles.expense_item__description}>
          <h2>{itemTitle}</h2>
          <div className={styles.expense_item__price}>${amount}</div>
        </div>
        <button onClick={clickHandler}>ChangeTitle</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
