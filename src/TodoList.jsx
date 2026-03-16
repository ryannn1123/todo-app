import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo
}) {
  return (
    <ul className="list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}