// src/features/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // In a real app, you'd check credentials from a backend
      // Here, we simply set isAuthenticated to true
      state.isAuthenticated = true;
      state.user = action.payload; // e.g., { username: 'john_doe' }
      // Save to localStorage to persist across sessions
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('auth');
    },
    loadAuthFromStorage: (state) => {
      const savedAuth = localStorage.getItem('auth');
      if (savedAuth) {
        const parsedAuth = JSON.parse(savedAuth);
        state.isAuthenticated = parsedAuth.isAuthenticated;
        state.user = parsedAuth.user;
      }
    },
  },
});

export const { login, logout, loadAuthFromStorage } = authSlice.actions;
export default authSlice.reducer;
