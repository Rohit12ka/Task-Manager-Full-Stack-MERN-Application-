import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

const TaskService = {
  // Get all tasks
  getTasks: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Get task by ID
  getTaskById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  // Create new task
  createTask: async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
  },

  // Update task
  updateTask: async (id, task) => {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
  },

  // Delete task
  deleteTask: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },
};

export default TaskService;