import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import { supabase } from "./supabaseClient";

export default function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: true });

    if (!error) setTodos(data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  async function addTodo(title) {
    await supabase.from("todos").insert([
      { title, completed: false }
    ]);

    getTodos();
  }

  async function toggleTodo(id, completed) {
    await supabase
      .from("todos")
      .update({ completed })
      .eq("id", id);

    getTodos();
  }

  async function deleteTodo(id) {
    await supabase
      .from("todos")
      .delete()
      .eq("id", id);

    getTodos();
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