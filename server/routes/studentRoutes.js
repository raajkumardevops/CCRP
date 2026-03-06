import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  applyCourse,
  getMyApplications
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/apply", protect, applyCourse);

router.get("/my-applications", protect, getMyApplications);

export default router;