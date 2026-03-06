import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RegisterCourse.css";

function RegisterCourse() {
  const { course } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    regNo: "",
    department: "",
    year: "",
    phone: "",
    email: "",
    cgpa: "",
    skills: "",
    interestReason: "",
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Resume is required");
      return;
    }

    console.log("Form Submitted:", formData);
    console.log("Course:", course);

    navigate("/student/success");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register for {course}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="studentName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="regNo"
            placeholder="Register Number"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="year"
            placeholder="Year (Final Year)"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            step="0.01"
            name="cgpa"
            placeholder="CGPA"
            onChange={handleChange}
            required
          />

          <textarea
            name="skills"
            placeholder="Your Skills"
            onChange={handleChange}
            required
          ></textarea>

          <textarea
            name="interestReason"
            placeholder="Why are you interested in this course?"
            onChange={handleChange}
            required
          ></textarea>

          <div className="resume-section">
            <p>Upload Resume (PDF only)</p>

            <label className="custom-file-upload">
              Choose Resume
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleChange}
                required
              />
            </label>

            {formData.resume && (
              <span className="file-name">{formData.resume.name}</span>
            )}
          </div>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterCourse;