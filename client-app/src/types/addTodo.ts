import TodoItem from './todo';

export default interface AddTodo {
    addTodo: (todo: TodoItem) => void
  }