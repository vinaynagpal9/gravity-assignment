import React from "react";

const TodoList = ({ todos, markTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.length === 0 ? (
        <li>No tasks available</li>
      ) : (
        todos.map((todo) => (
          <li
          key={todo.id}
          >
            {todo.todo}
            <button onClick={() => markTodo(todo.id)}>
              {todo.completed ? "Mark as Pending" : "Mark as Completed"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
