import express from "express";
import protect from "../middleware/authMiddleware.js";
import { applyCourse } from "../controllers/studentController.js";

const router = express.Router();

router.post("/apply", protect, applyCourse);

export default router;