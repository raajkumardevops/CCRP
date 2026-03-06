import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./StudentDetails.css";
import jsPDF from "jspdf";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const fetchStudentDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/admin/student/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setStudent(res.data);

    } catch (error) {
      console.error(error);
      alert("Failed to load student details");
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Student Application Details", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    let y = 35;

    const addRow = (label, value) => {
      doc.setFont("helvetica", "bold");
      doc.text(label, 20, y);
      doc.setFont("helvetica", "normal");
      doc.text(String(value), 60, y);
      y += 10;
    };

    addRow("Name:", student.studentName);
    addRow("Register No:", student.regNo);
    addRow("Department:", student.department);
    addRow("Year:", student.year);
    addRow("Phone:", student.phone);
    addRow("Email:", student.email);
    addRow("CGPA:", student.cgpa);
    addRow("Course:", student.courseName);

    y += 10;

    doc.setFont("helvetica", "bold");
    doc.text("Skills:", 20, y);
    y += 8;
    doc.setFont("helvetica", "normal");
    doc.text(student.skills, 20, y);

    y += 15;

    doc.setFont("helvetica", "bold");
    doc.text("Reason for Interest:", 20, y);
    y += 8;
    doc.setFont("helvetica", "normal");
    doc.text(student.interestReason, 20, y);

    doc.save(`${student.studentName}-Application.pdf`);
  };

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details-container">

      <div className="details-navbar">
        <h2>Student Application Details</h2>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="details-card">

        <h3 className="student-name">{student.studentName}</h3>

        <div className="details-grid">

          <div className="details-section">
            <h4>Register No</h4>
            <p>{student.regNo}</p>
          </div>

          <div className="details-section">
            <h4>Department</h4>
            <p>{student.department}</p>
          </div>

          <div className="details-section">
            <h4>Year</h4>
            <p>{student.year}</p>
          </div>

          <div className="details-section">
            <h4>Phone</h4>
            <p>{student.phone}</p>
          </div>

          <div className="details-section">
            <h4>Email</h4>
            <p>{student.email}</p>
          </div>

          <div className="details-section">
            <h4>CGPA</h4>
            <p>{student.cgpa}</p>
          </div>

          <div className="details-section">
            <h4>Course Applied</h4>
            <p>{student.courseName}</p>
          </div>

        </div>

        <div className="details-section">
          <h4>Skills</h4>
          <p>{student.skills}</p>
        </div>

        <div className="details-section">
          <h4>Reason for Interest</h4>
          <p>{student.interestReason}</p>
        </div>

        <div className="details-buttons">
          <button onClick={handleDownload}>Download PDF</button>
        </div>

      </div>
    </div>
  );
}

export default StudentDetails;