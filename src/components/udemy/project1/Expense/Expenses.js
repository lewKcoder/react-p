import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import styles from './Expenses.module.scss';

function Expense({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const expense = items.map((item, i) => <ExpenseItem {...item} key={i} />);
  return (
    <>
      <section className={styles.expenses}>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expense}
      </section>
    </>
  );
}

export default Expense;
