import styles from './ExpenseItem.module.scss';

function ExpenseItem({ id, title, amount, date }) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div className={styles.expense_item}>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className={styles.expense_item__description}>
        <h2>{title}</h2>
        <div className={styles.expense_item__price}>${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
