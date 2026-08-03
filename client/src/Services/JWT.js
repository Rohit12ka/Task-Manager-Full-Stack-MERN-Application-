// import jwt from "jsonwebtoken";

// const token = jwt.sign(
//   { id: user._id },
//   process.env.JWT_SECRET,
//   {
//     expiresIn: "7d",
//   }
// );
// backend/JWT.js
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m';      // access token
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'your-refresh-secret-key';
const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN || '7d'; // refresh token

/**
 * Generate access + refresh token for a user
 * @param {Object} user - { id, email, role, ... }
 * @returns {{ accessToken: string, refreshToken: string }}
 */
function generateTokens(user) {
  const accessToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role || 'user',
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    REFRESH_SECRET,
    { expiresIn: REFRESH_EXPIRES_IN }
  );

  return { accessToken, refreshToken };
}

/**
 * Verify access token
 * @param {string} token
 * @returns {Object} decoded payload
 */
function verifyAccessToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

/**
 * Verify refresh token
 * @param {string} token
 * @returns {Object} decoded payload
 */
function verifyRefreshToken(token) {
  return jwt.verify(token, REFRESH_SECRET);
}

/**
 * Express middleware to protect routes
 * Usage: app.get('/profile', authenticate, handler)
 */
function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyAccessToken(token);

    req.user = payload; // attach user info to request
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

/**
 * Optional: rotate refresh token (issue new pair)
 */
function rotateTokens(refreshToken) {
  const payload = verifyRefreshToken(refreshToken);
  // Here you would normally fetch user from DB using payload.id
  const fakeUser = { id: payload.id, email: 'user@example.com', role: 'user' };
  return generateTokens(fakeUser);
}

module.exports = {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
  authenticate,
  rotateTokens,
  JWT_SECRET,
  REFRESH_SECRET,
};