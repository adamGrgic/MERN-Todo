import React from 'react';
import TodoItem from '../types/todo';

function TodoList({ todos }: {todos: TodoItem[]}) {
    return (
        <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo.title}</li>
        ))}
        </ul>
    );
}

export default TodoList;
