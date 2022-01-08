import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const inputHandler = (e) => {
    setTodoList((prev) => [...prev, e]);
    console.log(todoList);
  };
  return (
    <div>
      <h1>Todo</h1>
      <Form inputHandler={inputHandler} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default Todo;
