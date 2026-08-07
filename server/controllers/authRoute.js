// routes/AuthRoute.js

const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getProfile,
} = require("../controllers/AuthController");

const authMiddleware = require("../middleware/authMiddleware");

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Route
router.get("/profile", authMiddleware, getProfile);

module.exports = router;