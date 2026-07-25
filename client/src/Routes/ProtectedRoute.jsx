import express from "express";
import userAuthentication from "../middleware/userAuthentication.js";

const router = express.Router();

router.get("/profile", userAuthentication, (req, res) => {
  res.json({
    success: true,
    userId: req.user.id,
  });
});

export default router;