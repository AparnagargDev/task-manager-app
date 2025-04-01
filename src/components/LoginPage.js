// src/components/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd validate credentials with a backend
    dispatch(login({ username }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bgcolor text-white">
      <form onSubmit={handleLogin} className="p-4 bg-secondary rounded">
        <h2 className="mb-3">Login</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
