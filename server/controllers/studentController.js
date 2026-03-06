import Application from "../models/Application.js";

export const applyCourse = async (req, res) => {
  try {
    const {
      studentName,
      regNo,
      department,
      year,
      phone,
      email,
      cgpa,
      skills,
      interestReason,
      courseName
    } = req.body;

     // duplicate check
    const existingApplication = await Application.findOne({
      studentId: req.user.id,
      courseName
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You already applied for this course"
      });
    }

    // save application

    const newApplication = new Application({
      studentId: req.user.id,
      studentName,
      regNo,
      department,
      year,
      phone,
      email,
      cgpa,
      skills,
      interestReason,
      courseName
    });

    await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};