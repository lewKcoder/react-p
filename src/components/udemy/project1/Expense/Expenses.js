import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';
import styles from './Expenses.module.scss';
import ExpensesChart from './ExpensesChart';

function Expense({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <section className={styles.expenses}>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </section>
    </>
  );
}

export default Expense;
