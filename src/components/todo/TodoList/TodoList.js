import styles from './TodoList.module.scss';
import { useEffect, useState } from 'react';

function TodoList({ list, time, isDoneHandler }) {
  const [isDone, setIsDone] = useState(true);

  const doDone = (list, e) => {
    isDoneHandler(list);
    setIsDone(!isDone);
  };

  return (
    <>
      {isDone && (
        <li key={Math.random()} className={styles.li}>
          <span>{time}</span>
          <p>{list}</p>
          <button className={styles.button} onClick={(e) => doDone(list, e)}>
            完了
          </button>
        </li>
      )}
    </>
  );
}

export default TodoList;
