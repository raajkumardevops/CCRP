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

  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <h2>Campus Course Portal</h2>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>

      {/* Description */}
      <div className="home-content">
        <p>
          Welcome to the Course Registration Portal. Select a course category
          below and apply for your preferred course.
        </p>

        <div className="card-container">
          {/* Technical Card */}
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

          {/* Non-Technical Card */}
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
    </div>
  );
}

export default StudentHome;