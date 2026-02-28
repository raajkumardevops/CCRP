import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CourseDashboard.css";

function CourseDashboard() {
  const { course } = useParams();
  const navigate = useNavigate();

  // Dummy student data (for now)
  const [students] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      regNo: "21CS001",
      department: "CSE",
      cgpa: 8.5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      regNo: "21IT015",
      department: "IT",
      cgpa: 8.9,
    },
    {
      id: 3,
      name: "Rahul Verma",
      regNo: "21CS023",
      department: "CSE",
      cgpa: 7.8,
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.regNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="dashboard-navbar">
        <h2>{course} - Applications</h2>
        <button onClick={() => navigate("/admin/home")}>Back</button>
      </div>

      <div className="dashboard-content">
        {/* Total Count */}
        <h3>Total Students: {filteredStudents.length}</h3>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by Name or Register Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {/* Table */}
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
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.regNo}</td>
                <td>{student.department}</td>
                <td>{student.cgpa}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/admin/student/${student.id}`)
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