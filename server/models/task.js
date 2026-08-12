const express = require('express');
const mongoose = require('mongoose');

// ==========================================
// 1. TASK SCHEMA & MODEL
// ==========================================
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Task title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Task = mongoose.model('Task', taskSchema);

// ==========================================
// 2. CONTROLLER FUNCTIONS
// ==========================================

// Create a new task
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json({ success: true, data: savedTask });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all tasks (with optional filtering & sorting)
const getTasks = async (req, res) => {
  try {
    const { status, priority, sortBy } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    let query = Task.find(filter);

    if (sortBy) {
      query = query.sort({ [sortBy]: -1 });
    } else {
      query = query.sort({ createdAt: -1 }); // Default: newest first
    }

    const tasks = await query.exec();
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, error: 'Task not found' });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid Task ID' });
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ success: false, error: 'Task not found' });
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ success: false, error: 'Task not found' });
    }

    res.status(200).json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid Task ID' });
  }
};

// ==========================================
// 3. EXPRESS ROUTER
// ==========================================
const router = express.Router();

router.route('/')
  .post(createTask)
  .get(getTasks);

router.route('/:id')
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

module.exports = {
  Task,
  taskRouter: router,
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};