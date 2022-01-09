import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import DoneList from '../DoneList/DoneList';
import { useEffect, useState } from 'react';
import styles from './Todo.module.scss';

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [time, setTime] = useState([]);
  const [isDoneTodoList, setIsDoneTodoList] = useState([]);

  const inputHandler = (e) => {
    setTodoList((prev) => [...prev, e]);
    const date = new Date();
    const Y = date.getFullYear();
    const M = ('00' + (date.getMonth() + 1)).slice(-2);
    const D = ('00' + date.getDate()).slice(-2);
    setTime((prev) => [...prev, `${Y}/${M}/${D}`]);
  };

  const isDoneHandler = (e) => {
    setIsDoneTodoList((prev) => [...prev, e]);
  };

  const doneListDelete = (i) => {
    isDoneTodoList.splice(i, 1);
    console.log(isDoneTodoList);
  };

  return (
    <div>
      <h1>Todo</h1>
      <Form inputHandler={inputHandler} />
      <ul className={styles.ul}>
        {todoList.map((list, index) => (
          <TodoList key={index} list={list} time={time[index]} isDoneHandler={isDoneHandler} />
        ))}
      </ul>
      {isDoneTodoList[0] && (
        <div className={styles.done}>
          <h3>完了済</h3>
          <ul className={styles.ul}>
            {isDoneTodoList.map((list, index) => (
              <DoneList key={index} list={list} index={index} doneListDelete={doneListDelete} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Todo;
