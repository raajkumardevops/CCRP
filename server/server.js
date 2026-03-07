import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import protect, { adminOnly } from "./middleware/authMiddleware.js";
import studentRoutes from "./routes/studentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

connectDB();

const app = express();

/* ================= CORS ================= */

app.use(cors({
  origin: "*"
}));

/* ================= BODY PARSER ================= */

app.use(express.json());

/* ================= ROUTES ================= */

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/admin", adminRoutes);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* ================= PROTECTED TEST ================= */

app.get("/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

/* ================= ADMIN TEST ================= */

app.get("/admin-test", protect, adminOnly, (req, res) => {
  res.json({
    message: "Welcome Admin"
  });
});

/* ================= PORT ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});