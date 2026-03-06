import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Analytics.css";

function Analytics() {
  const navigate = useNavigate();

  const [analytics, setAnalytics] = useState({
    totalApplications: 0,
    totalTechnical: 0,
    totalNonTechnical: 0,
    courseSummary: []
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/course-summary",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setAnalytics(res.data);

    } catch (error) {
      console.error(error);
      alert("Failed to load analytics");
    }
  };

  return (
    <div className="analytics-container">

      <div className="analytics-navbar">
        <h2>Admin Analytics Dashboard</h2>
        <button onClick={() => navigate("/admin/home")}>Back</button>
      </div>

      <div className="analytics-content">

        <div className="summary-cards">

          <div className="summary-card">
            <h3>Total Applications</h3>
            <p>{analytics.totalApplications}</p>
          </div>

          <div className="summary-card">
            <h3>Technical Applications</h3>
            <p>{analytics.totalTechnical}</p>
          </div>

          <div className="summary-card">
            <h3>Non-Technical Applications</h3>
            <p>{analytics.totalNonTechnical}</p>
          </div>

        </div>

        <div className="analytics-table-section">
          <h3 className="section-title">Course-wise Applications</h3>

          <table className="analytics-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Total Students</th>
              </tr>
            </thead>

            <tbody>
              {analytics.courseSummary.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item._id.charAt(0).toUpperCase() + item._id.slice(1)}
                  </td>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Analytics;