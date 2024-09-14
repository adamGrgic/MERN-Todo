import React from 'react';
import TodoItem from '../types/todo';
import '../styles/TodoList.css'

function TodoList({ todos }: {todos: TodoItem[]}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>Status: {todo.isDone ? "Done" : "Pending"}</p>
                    <p>Date Created: {todo.dateCreated.toDateString()}</p>
                    <div className='foo'>
                        <button>Foo</button>
                        <button>Foo</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
