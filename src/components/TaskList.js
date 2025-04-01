import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, addTask } from '../features/tasksSlice';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const error = useSelector((state) => state.tasks.error);
  
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState({ title: '', priority: 'Low', type: 'Indoor', city: '' });

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditedTask({ title: task.title, priority: task.priority, type: task.type, city: task.city || '' });
  };

  const handleSaveClick = (taskId) => {
    dispatch(deleteTask(taskId)); // Remove the old task
    dispatch(addTask({ id: taskId, ...editedTask })); // Add the updated task
    setEditingTaskId(null); // Exit editing mode
  };

  return (
    <div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      <h2 className="mb-3">Your Tasks</h2>
      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-4 mb-3" key={task.id}>
            <div className="card shadow">
              <div className="card-body">
                {editingTaskId === task.id ? (
                  <>
                    <input 
                      type="text" 
                      className="form-control mb-2" 
                      value={editedTask.title} 
                      onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })} 
                    />
                    <select 
                      className="form-select mb-2" 
                      value={editedTask.priority} 
                      onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })} 
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                    <select 
                      className="form-select mb-2" 
                      value={editedTask.type} 
                      onChange={(e) => setEditedTask({ ...editedTask, type: e.target.value })} 
                    >
                      <option value="Indoor">Indoor</option>
                      <option value="Outdoor">Outdoor</option>
                    </select>
                    {editedTask.type === 'Outdoor' && (
                      <input 
                        type="text" 
                        className="form-control mb-2" 
                        placeholder="City" 
                        value={editedTask.city} 
                        onChange={(e) => setEditedTask({ ...editedTask, city: e.target.value })} 
                      />
                    )}
                    <button className="btn btn-success me-2" onClick={() => handleSaveClick(task.id)}>Save</button>
                    <button className="btn btn-secondary" onClick={() => setEditingTaskId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">
                      {task.title} 
                      <span className="badge bg-info ms-2">{task.priority}</span>
                    </h5>
                    <p className="card-text">Type: {task.type}</p>
                    {task.type === 'Outdoor' && task.weatherData ? (
                      <div>
                        <p>Temperature: {task.weatherData.temp}°C</p>
                        <p>Condition: {task.weatherData.description}</p>
                      </div>
                    ) : (
                      <p>Every completed task is a step closer to success! Keep going—you're making great progress!</p>
                    )}
                    <button className="btn btn-primary me-2" onClick={() => handleEditClick(task)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
