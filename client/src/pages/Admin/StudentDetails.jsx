import { useParams, useNavigate } from "react-router-dom";
import "./StudentDetails.css";
import jsPDF from "jspdf";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = {
    id: id,
    name: "ARUN",
    regNo: "21CS001",
    department: "MCA",
    year: "Final Year",
    phone: "(959) 709-6605",
    email: "deepukaruna03@gmail.com",
    cgpa: 8.5,
    skills: "Java, SQL",
    interestReason: "I want to improve my full stack skills.",
    course: "Java",
    resume: "/dummy-resume.pdf",
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    // Title
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
      doc.text(value, 60, y);
      y += 10;
    };

    addRow("Name:", student.name);
    addRow("Register No:", student.regNo);
    addRow("Department:", student.department);
    addRow("Year:", student.year);
    addRow("Phone:", student.phone);
    addRow("Email:", student.email);
    addRow("CGPA:", String(student.cgpa));
    addRow("Course Applied:", student.course);

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

    doc.save(`${student.name}-Application.pdf`);
  };

  return (
    <div className="details-container">

      <div className="details-navbar">
        <h2>Student Application Details</h2>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="details-card">

        <h3 className="student-name">{student.name}</h3>

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
          <p>{student.course}</p>
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
          <a href={student.resume} download>
            <button>Download Resume</button>
          </a>
          <button onClick={handleDownload}>Download PDF</button>
        </div>

      </div>
    </div>
  );
}

export default StudentDetails;