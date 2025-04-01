# Task Manager App

A simple task management application built using **React, Redux Toolkit, and OpenWeatherMap API**. Users can add, edit, and delete tasks while also retrieving weather information for outdoor tasks.

## Features
- Add tasks with priority and type (Indoor/Outdoor)
- Fetch weather details for outdoor tasks based on the selected city
- Edit and update tasks
- Delete tasks
- Persistent storage using **localStorage**
- User authentication (Login/Logout)

## Tech Stack
- **React** - Frontend UI
- **Redux Toolkit** - State Management
- **Bootstrap** - Styling
- **Axios** - API requests
- **OpenWeatherMap API** - Fetching weather data

## Getting Started
### Prerequisites
Ensure you have **Node.js** and **npm** installed on your machine.

### Installation Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/AparnagargDev/task-manager-app.git
   cd task-manager-app
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up OpenWeatherMap API Key**
   - Go to [OpenWeatherMap](https://openweathermap.org/)
   - Sign up and get an API key
   - Open `src/features/tasksSlice.js`
   - Replace `const API_KEY = 'your-api-key';` with your actual API key.

4. **Run the application**
   ```sh
   npm start
   ```
5. **Open in browser**
   - Navigate to `http://localhost:3000`

## Folder Structure
```
📂 task-manager-app
│-- 📂 src
│   │-- 📂 components  # UI components (TaskForm, TaskList, HomePage)
│   │-- 📂 features    # Redux slices (tasksSlice, authSlice)
│   │-- 📂 store       # Redux store configuration
│   │-- App.js        # Root component
│   │-- index.js      # Entry point
│-- package.json      # Dependencies and scripts
│-- README.md         # Project documentation
```

## Future Improvements
- Add user authentication with Firebase
- Implement task categories
- Dark mode support

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

## License
This project is **open-source** under the MIT License.

---
Enjoy coding! 🚀

