import styles from './TodoList.module.scss';

function TodoList({ todoList }) {
  const list = todoList.map((list) => (
    <li key={Math.random()} className={styles.li}>
      {list}
    </li>
  ));
  return <ul class={styles.ul}>{list}</ul>;
}

export default TodoList;
