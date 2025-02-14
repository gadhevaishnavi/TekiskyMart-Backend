import express from "express";
import { register, userLogin } from "../controllers/userController.js";
import { authenticateToken } from "../auth/jwtToken.js";

const userRoute = express.Router();

// Register a new user
userRoute.post("/register", register);

// Login user
userRoute.post("/login", userLogin);

// Get user profile (Protected Route - Requires Token)
userRoute.get("/profile/:email", authenticateToken);

export default userRoute;
