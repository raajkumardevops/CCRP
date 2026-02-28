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

  return (
    <div className="admin-home-container">
      {/* Navbar */}
      <div className="admin-navbar">
        <h2>Admin Panel - Course Portal</h2>
        <button onClick={() => navigate("/admin/login")}>Logout</button>
      </div>

      {/* Content */}
      <div className="admin-home-content">
        <p>
          Select a course category to view student applications and manage
          registrations.
        </p>

        <div className="admin-card-container">
          {/* Technical */}
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

          {/* Non-Technical */}
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
    </div>
  );
}

export default AdminHome;