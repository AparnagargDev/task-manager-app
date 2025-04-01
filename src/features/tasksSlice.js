// src/features/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tasks: [],
  weatherInfo: null,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    loadTasksFromStorage: (state) => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
      }
    },
    addTask: (state, action) => {
      // action.payload = { id, title, priority, type, city, weatherData }
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      // action.payload = taskId
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loadTasksFromStorage, addTask, deleteTask, setError } = tasksSlice.actions;

// Thunk to fetch weather data
export const fetchWeatherData = (task) => async (dispatch) => {
  try {
    // Use your OpenWeatherMap API key and use the city provided by the task
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const city = task.city; // Using city from the task object
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);
    const weatherData = response.data;
    
    // Create a new task object including the weather data
    const newTask = {
      ...task,
      weatherData: {
        temp: weatherData.main.temp,
        description: weatherData.weather[0].description,
      },
    };

    dispatch(addTask(newTask));
  } catch (error) {
    dispatch(setError('Failed to fetch weather data.'));
  }
};

export default tasksSlice.reducer;
