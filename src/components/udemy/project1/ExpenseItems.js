import styles from './ExpenseItem.module.scss';
import ExpenseItem from './ExpenseItem';

function ExpenseItems() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const expense = expenses.map((item, i) => <ExpenseItem {...item} key={i} />);

  return (
    <main className={styles.main}>
      <section className={styles.expense}>{expense}</section>
    </main>
  );
}

export default ExpenseItems;
