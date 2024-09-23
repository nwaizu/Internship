import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]); // State for storing todos
  const [newTodo, setNewTodo] = useState(''); // State for new todo input

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(''); // Clear input after adding
    }
  };

  // Function to handle toggling the completion status of a todo
  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          style={{ padding: '10px', width: '100%' }}
        />
        <button onClick={handleAddTodo} style={{ marginTop: '10px', padding: '10px', width: '100%' }}>
          Add Todo
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginTop: '10px' }}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => handleToggleTodo(index)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(index)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
