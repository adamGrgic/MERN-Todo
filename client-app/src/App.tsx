import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoItem from './types/todo';

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: TodoItem) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;