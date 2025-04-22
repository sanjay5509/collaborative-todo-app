import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: '', description: '', status: '' });

  useEffect(() => {
    fetch('http://localhost:8000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const createTask = async () => {
    const response = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: { 'Content-Type': 'application/json' },
    });
    const newTask = await response.json();
    setTasks([...tasks, newTask.task]);
  };

  return (
    <div>
      <h1>Collaborative To-Do App</h1>
      <div>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Task Title"
        />
        <input
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Task Description"
        />
        <input
          type="text"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          placeholder="Task Status"
        />
        <button onClick={createTask}>Create Task</button>
      </div>
      <div>
        <h2>Tasks List</h2>
        {tasks.map((task, index) => (
          <div key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
