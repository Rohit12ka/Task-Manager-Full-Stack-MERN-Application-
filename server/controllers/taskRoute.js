// routes/TaskRoute.js

const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");

const authMiddleware = require("../middleware/authMiddleware");

// Create a new task
router.post("/", authMiddleware, createTask);

// Get all tasks of logged-in user
router.get("/", authMiddleware, getTasks);

// Get single task
router.get("/:id", authMiddleware, getTaskById);

// Update task
router.put("/:id", authMiddleware, updateTask);

// Delete task
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;