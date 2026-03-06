import Application from "../models/Application.js";
import ExcelJS from "exceljs";

export const getStudentsByCourse = async (req, res) => {
  try {
    const { course } = req.params;

    const students = await Application.find({
      courseName: course
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
  const data = await Application.find();
  res.json(data);
};

export const exportStudentsExcel = async (req, res) => {
  try {
    const { course } = req.params;

    const students = await Application.find({
      courseName: { $regex: course, $options: "i" }
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

    await workbook.xlsx.writeFile("students.xlsx");

    res.json({
      message: "Excel file created"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getCourseSummary = async (req, res) => {
  try {
    const technicalCourses = [
      "Java",
      "DSA",
      "Python with Full Stack",
      "Web Development"
    ];

    const nonTechnicalCourses = [
      "UI/UX Design",
      "Cloud Computing",
      "Data Analyst",
      "Salesforce Admin"
    ];

    // total applications
    const totalApplications = await Application.countDocuments();

    // technical applications
    const totalTechnical = await Application.countDocuments({
      courseName: { $in: technicalCourses }
    });

    // non-technical applications
    const totalNonTechnical = await Application.countDocuments({
      courseName: { $in: nonTechnicalCourses }
    });

    // course-wise summary
    const courseSummary = await Application.aggregate([
      {
        $group: {
          _id: "$courseName",
          count: { $sum: 1 }
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