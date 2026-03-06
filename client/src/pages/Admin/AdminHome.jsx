import { useNavigate } from "react-router-dom";
import "./AdminHome.css";

function AdminHome() {
  const navigate = useNavigate();

  const technicalCourses = [
    "Java",
    "DSA",
    "Python with Full Stack",
    "Web Development",
  ];

  const nonTechnicalCourses = [
    "UI & UX Design",
    "Cloud Computing",
    "Data Analyst",
    "Salesforce Admin",
  ];

  const handleCourseClick = (course) => {
    navigate(`/admin/dashboard/${course}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="admin-home-container">

      <div className="admin-navbar">
        <h2>Admin Panel - Course Portal</h2>

        <div className="admin-nav-buttons">
          <button onClick={() => navigate("/admin/analytics")}>
            Analytics
          </button>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="admin-home-content">
        <p>
          Select a course category below to view and manage student applications.
          Review applicant details, monitor course registrations, and oversee
          the selection process efficiently through the admin dashboard.
        </p>

        <div className="admin-card-container">

          <div className="admin-course-card">
            <h3>Technical Courses</h3>
            <p>View students applied for technical courses.</p>

            <select
              onChange={(e) => handleCourseClick(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Select a Course
              </option>

              {technicalCourses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-course-card">
            <h3>Non-Technical Courses</h3>
            <p>View students applied for non-technical courses.</p>

            <select
              onChange={(e) => handleCourseClick(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Select a Course
              </option>

              {nonTechnicalCourses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      <div className="footer">
        © 2026 Campus Course Portal | Student Registration System
      </div>

    </div>
  );
}

export default AdminHome;