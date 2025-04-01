// src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData, addTask } from '../features/tasksSlice';
import { v4 as uuidv4 } from 'uuid'; // for generating unique IDs
// npm install uuid if you haven't already

function TaskForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [priority, setPriority] = useState('Low');
  const [type, setType] = useState('Indoor');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new task object.
    // If the task type is 'Outdoor', include the city value; otherwise, city is an empty string.
    const newTask = {
      id: uuidv4(),
      title,
      priority,
      type,
      city: type === 'Outdoor' ? city : '', // This ensures the city is captured only for outdoor tasks
    };

    // If task type is Outdoor, fetch weather data using the city provided, then add the task.
    // Otherwise, add the task directly.
    if (type === 'Outdoor') {
      dispatch(fetchWeatherData(newTask));
    } else {
      dispatch(addTask(newTask));
    }

    // Clear the form fields after submission
    setTitle('');
    setPriority('Low');
    setType('Indoor');
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 rounded shadow bg-light">
      <h2 className="mb-3">Add a New Task</h2>

      <div className="mb-3">
        <label className="form-label">Task Title</label>
        <input 
          type="text" 
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Priority</label>
        <select 
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Type</label>
        <select 
          className="form-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>
      </div>

      {/* Conditionally render the City input if the task type is Outdoor */}
      {type === 'Outdoor' && (
        <div className="mb-3">
          <label className="form-label">City</label>
          <input 
            type="text" 
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            required
          />
        </div>
      )}

      <button type="submit" className="btn btn-primary w-100">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
