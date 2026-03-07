import { useEffect, useState } from "react";
import API from "../../services/api";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get(
        "/api/student/my-applications",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setApplications(res.data);

    } catch (error) {
      console.error(error);
      alert("Failed to load applications");
    }
  };

  return (
    <div className="myapps-container">
      <h2 className="myapps-title">My Applications</h2>

      {applications.length === 0 ? (
        <p className="no-applications">No applications found</p>
      ) : (
        <div className="myapps-grid">
          {applications.map((app) => (
            <div key={app._id} className="myapp-card">
              <h3>{app.courseName}</h3>
              <p><strong>Name:</strong> {app.studentName}</p>
              <p><strong>Register No:</strong> {app.regNo}</p>
              <p><strong>Department:</strong> {app.department}</p>
              <p><strong>Year:</strong> {app.year}</p>
              <p><strong>Phone:</strong> {app.phone}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>CGPA:</strong> {app.cgpa}</p>
              <p><strong>Skills:</strong> {app.skills}</p>
              <p><strong>Reason:</strong> {app.interestReason}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyApplications;