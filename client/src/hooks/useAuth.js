// middleware/userAuthentication.js

import jwt from "jsonwebtoken";

const userAuthentication = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token missing",
      });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store user id in request
    req.user = {
      id: decoded.id,
    };

    next();
  } catch (error) {
    console.error("Authentication Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default userAuthentication;