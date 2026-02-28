import { useParams, useNavigate } from "react-router-dom";
import "./StudentDetails.css";
import jsPDF from "jspdf";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy student data (later this will come from backend)
  const student = {
    id: id,
    name: "Arun Kumar",
    regNo: "21CS001",
    department: "CSE",
    year: "Final Year",
    phone: "9876543210",
    email: "arun@gmail.com",
    cgpa: 8.5,
    skills: "Java, React, MongoDB",
    interestReason: "I want to improve my full stack skills.",
    course: "Java",
    resume: "/dummy-resume.pdf",
  };

  const handleDownload = () => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Student Application Details", 20, 20);

  doc.setFontSize(12);
  doc.text(`Name: ${student.name}`, 20, 35);
  doc.text(`Register No: ${student.regNo}`, 20, 45);
  doc.text(`Department: ${student.department}`, 20, 55);
  doc.text(`Year: ${student.year}`, 20, 65);
  doc.text(`Phone: ${student.phone}`, 20, 75);
  doc.text(`Email: ${student.email}`, 20, 85);
  doc.text(`CGPA: ${student.cgpa}`, 20, 95);
  doc.text(`Course Applied: ${student.course}`, 20, 105);

  doc.text("Skills:", 20, 120);
  doc.text(student.skills, 20, 130);

  doc.text("Reason for Interest:", 20, 150);
  doc.text(student.interestReason, 20, 160);

  doc.save(`${student.name}-Application.pdf`);
};

  return (
    <div className="details-container">
      {/* Navbar */}
      <div className="details-navbar">
        <h2>Student Application Details</h2>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="details-card">
        <h3>{student.name}</h3>

        <div className="details-grid">
          <p><strong>Register No:</strong> {student.regNo}</p>
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>Year:</strong> {student.year}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>CGPA:</strong> {student.cgpa}</p>
          <p><strong>Course Applied:</strong> {student.course}</p>
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
          <a href={student.resume} download>
            <button>Download Resume</button>
          </a>

            <button onClick={handleDownload}>Print data</button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;