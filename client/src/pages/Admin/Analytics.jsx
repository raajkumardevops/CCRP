import { useNavigate } from "react-router-dom";
import "./Analytics.css";

function Analytics() {
  const navigate = useNavigate();

  // Dummy Data (later from backend)
  const totalApplications = 42;

  const technicalCount = 28;
  const nonTechnicalCount = 14;

  const courseSummary = [
    { course: "Java", count: 10 },
    { course: "DSA", count: 8 },
    { course: "Python with Full Stack", count: 6 },
    { course: "Web Development", count: 4 },
    { course: "UI & UX Design", count: 5 },
    { course: "Cloud Computing", count: 3 },
    { course: "Data Analyst", count: 4 },
    { course: "Salesforce Admin", count: 2 },
  ];

  return (
    <div className="analytics-container">
      {/* Navbar */}
      <div className="analytics-navbar">
        <h2>Admin Analytics Dashboard</h2>
        <button onClick={() => navigate("/admin/home")}>Back</button>
      </div>

      <div className="analytics-content">
        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Total Applications</h3>
            <p>{totalApplications}</p>
          </div>

          <div className="summary-card">
            <h3>Technical Applications</h3>
            <p>{technicalCount}</p>
          </div>

          <div className="summary-card">
            <h3>Non-Technical Applications</h3>
            <p>{nonTechnicalCount}</p>
          </div>
        </div>

        {/* Course-wise Table */}
        <div className="analytics-table-section">
          <h3>Course-wise Applications</h3>

          <table className="analytics-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Total Students</th>
              </tr>
            </thead>
            <tbody>
              {courseSummary.map((item, index) => (
                <tr key={index}>
                  <td>{item.course}</td>
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