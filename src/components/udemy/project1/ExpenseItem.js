import styles from './ExpenseItem.module.scss';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem({ id, title, amount, date }) {
  return (
    <Card>
      <ExpenseDate date={date} />
      <div className={styles.expense_item__description}>
        <h2>{title}</h2>
        <div className={styles.expense_item__price}>${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
