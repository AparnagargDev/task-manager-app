// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
}

export default App;
