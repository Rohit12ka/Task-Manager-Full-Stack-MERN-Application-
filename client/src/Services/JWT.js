import jwt from "jsonwebtoken";

const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);