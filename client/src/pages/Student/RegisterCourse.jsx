import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
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
    interestReason: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/student/apply",
        {
          ...formData,
          courseName: course
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert(res.data.message);

      navigate("/student/success");

    } catch (error) {
      alert(error.response?.data?.message || "Application failed");
    }
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
            value={formData.studentName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="regNo"
            placeholder="Register Number"
            value={formData.regNo}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="year"
            placeholder="Year (Final Year)"
            value={formData.year}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            step="0.01"
            name="cgpa"
            placeholder="CGPA"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />

          <textarea
            name="skills"
            placeholder="Your Skills"
            value={formData.skills}
            onChange={handleChange}
            required
          ></textarea>

          <textarea
            name="interestReason"
            placeholder="Why are you interested in this course?"
            value={formData.interestReason}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterCourse;