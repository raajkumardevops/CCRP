import Application from "../models/Application.js";
import ExcelJS from "exceljs";

export const getStudentsByCourse = async (req, res) => {
  try {
    const { course } = req.params;

    const students = await Application.find({
      courseName: { $regex: `^${course}$`, $options: "i" }
    });

    res.status(200).json(students);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getStudentDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Application.findById(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(student);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const data = await Application.find();
    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const exportStudentsExcel = async (req, res) => {
  try {
    const { course } = req.params;

    const students = await Application.find({
      courseName: { $regex: `^${course}$`, $options: "i" }
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Students");

    worksheet.columns = [
      { header: "Student Name", key: "studentName", width: 20 },
      { header: "Register No", key: "regNo", width: 20 },
      { header: "Department", key: "department", width: 20 },
      { header: "Year", key: "year", width: 10 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "CGPA", key: "cgpa", width: 10 },
      { header: "Course", key: "courseName", width: 25 }
    ];

    students.forEach(student => {
      worksheet.addRow(student);
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${course}-students.xlsx`
    );

    await workbook.xlsx.write(res);

    res.end();

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getCourseSummary = async (req, res) => {
  try {
    const technicalCourses = [
      "java",
      "dsa",
      "python with full stack",
      "web development"
    ];

    const nonTechnicalCourses = [
      "ui/ux design",
      "cloud computing",
      "data analyst",
      "salesforce admin"
    ];

    const totalApplications = await Application.countDocuments();

    const allApplications = await Application.find();

    const totalTechnical = allApplications.filter(app =>
      technicalCourses.includes(app.courseName.toLowerCase())
    ).length;

    const totalNonTechnical = allApplications.filter(app =>
      nonTechnicalCourses.includes(app.courseName.toLowerCase())
    ).length;

    const courseSummary = await Application.aggregate([
      {
        $group: {
          _id: {
            $toLower: "$courseName"
          },
          count: {
            $sum: 1
          }
        }
      }
    ]);

    res.status(200).json({
      totalApplications,
      totalTechnical,
      totalNonTechnical,
      courseSummary
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};