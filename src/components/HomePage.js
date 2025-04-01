// src/components/HomePage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Hello, {user?.username}! Your To-Do List</h1>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      {/* The form to add tasks */}
      <TaskForm />

      {/* The list of tasks */}
      <TaskList />
    </div>
  );
}

export default HomePage;
