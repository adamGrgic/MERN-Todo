import React, { useState } from 'react';
import AddTodo from '../types/addTodo';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }: AddTodo) {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const cleanInput = () => {
    setTitleInput('');
    setDescriptionInput('');
  }
  
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const dateCreated = new Date(Date.now());   
      
      addTodo({
        id: uuidv4(),
        title: titleInput,
        description: descriptionInput,
        isDone: false,
        dateCreated: dateCreated
      });
      
      cleanInput();
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

