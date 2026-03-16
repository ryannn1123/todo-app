import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos(current => [
      ...current,
      { id: crypto.randomUUID(), title, completed: false }
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos(current =>
      current.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(current =>
      current.filter(todo => todo.id !== id)
    );
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />

      <h1 className="header">Todo List</h1>

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}