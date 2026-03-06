import express from "express";
import protect, { adminOnly } from "../middleware/authMiddleware.js";
import {
  getStudentsByCourse,
  getStudentDetails,
  getAllApplications,
  exportStudentsExcel,
  getCourseSummary
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "admin route working" });
});

router.get("/all", protect, adminOnly, getAllApplications);

router.get("/students/:course", protect, adminOnly, getStudentsByCourse);

router.get("/export/:course", protect, adminOnly, exportStudentsExcel);

router.get("/student/:id", protect, adminOnly, getStudentDetails);

router.get("/course-summary", protect, adminOnly, getCourseSummary);

export default router;