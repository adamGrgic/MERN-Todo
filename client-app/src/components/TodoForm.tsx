import React, { useState } from 'react';
import TodoItem from '../types/todo';

function TodoForm({ addTodo }: { addTodo: (todo: TodoItem) => void }) {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateCreated = new Date(Date.now());
    addTodo({
      id: 1,
      title: titleInput,
      description: descriptionInput,
      isDone: false,
      dateCreated: dateCreated
    });
    setTitleInput('');
    setDescriptionInput('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />

        <input
          type="text"
          value={descriptionInput}
          onChange={(e)=> setDescriptionInput(e.target.value)}
        />

        <button type="submit">Add Todo</button>
      </form>
    );
  
  };

  


export default TodoForm;

