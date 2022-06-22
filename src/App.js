import React, { useState } from 'react';
import './style.css';
import HeaderTodo from './header/todoheader';
import TodoListHolder from './todo_list/todoListHolder';
export default function App() {
  const [todoItems, setTodoItems] = useState([
    { id: 1, name: 'Hit the gym' },
    { id: 2, name: 'Pay bills' },
    { id: 3, name: 'Meet George' },
    { id: 4, name: 'Buy eggs' },
    { id: 5, name: 'Read a book' },
    { id: 6, name: 'Organize office' },
  ]);

  const onSaveHandler = (name) => {
    setTodoItems([
      ...todoItems,
      {
        id: Math.random().toString(),
        name,
      },
    ]);
  };
  return (
    <div>
      <HeaderTodo onSaveTodoData={onSaveHandler} />
      <div>
        <TodoListHolder todoNames={todoItems} />
      </div>
    </div>
  );
}
