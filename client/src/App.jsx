import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/Student/RegisterPage";
import StudentLogin from "./pages/Student/StudentLogin";
import StudentHome from "./pages/Student/StudentHome";
import RegisterCourse from "./pages/Student/RegisterCourse";
import SuccessPage from "./pages/Student/SuccessPage";
import MyApplications from "./pages/Student/MyApplications";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminHome from "./pages/Admin/AdminHome";
import CourseDashboard from "./pages/Admin/CourseDashboard";
import StudentDetails from "./pages/Admin/StudentDetails";
import Analytics from "./pages/Admin/Analytics";

import ProtectedRoute from "./components/ProtrectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* Student Public */}
        <Route path="/" element={<StudentLogin />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Student Protected */}
        <Route
          path="/student/home"
          element={
            <ProtectedRoute>
              <StudentHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/register/:course"
          element={
            <ProtectedRoute>
              <RegisterCourse />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/success"
          element={
            <ProtectedRoute>
              <SuccessPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/my-applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        {/* Admin Public */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Protected */}
        <Route
          path="/admin/home"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/dashboard/:course"
          element={
            <ProtectedRoute>
              <CourseDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/student/:id"
          element={
            <ProtectedRoute>
              <StudentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;