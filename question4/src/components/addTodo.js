import React, { useState } from 'react';

const AddTodo = ({ addTodoData }) => {
  const [task, setTask] = useState('');

  const submitAddTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
        addTodoData({
        id: Date.now(),
        todo: task,
        completed: false
      });
      setTask(''); // Clear the input
    }
  };

  return (
    <form onSubmit={submitAddTodo}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
