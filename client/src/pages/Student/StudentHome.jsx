import { useNavigate } from "react-router-dom";
import "./StudentHome.css";

function StudentHome() {
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
    navigate(`/student/register/${course}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="home-container">

      <div className="navbar">
        <h2>Campus Course Registration Portal (CCRP)</h2>

        <div className="admin-nav-buttons">
          <button onClick={handleLogout}>
            Logout
          </button>

          <button onClick={() => navigate("/student/my-applications")}>
            My Applications
          </button>
        </div>
      </div>

      <div className="home-content">
        <p>
          Welcome to the Campus Course Registration Portal. Select from our
          curated technical and non-technical courses and submit your application
          to advance your skills and career readiness.
        </p>

        <div className="card-container">

          <div className="course-card">
            <h3>Technical Courses</h3>
            <p>Enhance your programming and development skills.</p>

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

          <div className="course-card">
            <h3>Non-Technical Courses</h3>
            <p>Develop soft skills and industry-based knowledge.</p>

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

export default StudentHome;