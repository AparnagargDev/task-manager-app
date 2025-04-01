// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // if using Bootstrap
import { Provider } from 'react-redux';
import { store } from './app/store';
import { loadAuthFromStorage } from './features/authSlice';
import { loadTasksFromStorage } from './features/tasksSlice';

// Before rendering, load existing data from localStorage
store.dispatch(loadAuthFromStorage());
store.dispatch(loadTasksFromStorage());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
