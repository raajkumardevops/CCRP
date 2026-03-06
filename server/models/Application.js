import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    studentName: {
      type: String,
      required: true
    },

    regNo: {
      type: String,
      required: true
    },

    department: {
      type: String,
      required: true
    },

    year: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    cgpa: {
      type: String,
      required: true
    },

    skills: {
      type: String,
      required: true
    },

    interestReason: {
      type: String,
      required: true
    },

    courseName: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;