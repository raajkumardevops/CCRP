import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CourseDashboard.css";

function CourseDashboard() {
  const { course } = useParams();
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, [course]);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/admin/students/${course}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setStudents(res.data);

    } catch (error) {
      console.error(error);
      alert("Failed to load students");
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.studentName.toLowerCase().includes(search.toLowerCase()) ||
      student.regNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">

      <div className="dashboard-navbar">
        <h2>{course} - Applications</h2>
        <button onClick={() => navigate("/admin/home")}>Back</button>
      </div>

      <div className="dashboard-content">

        <h3>Total Students: {filteredStudents.length}</h3>

        <input
          type="text"
          placeholder="Search by Name or Register Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Register No</th>
              <th>Department</th>
              <th>CGPA</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.studentName}</td>
                <td>{student.regNo}</td>
                <td>{student.department}</td>
                <td>{student.cgpa}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/admin/student/${student._id}`)
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default CourseDashboard;
