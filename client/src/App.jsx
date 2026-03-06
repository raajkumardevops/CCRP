import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/Student/RegisterPage"
import StudentLogin from "./pages/Student/StudentLogin";
import StudentHome from "./pages/Student/StudentHome";
import RegisterCourse from "./pages/Student/RegisterCourse";
import SuccessPage from "./pages/Student/SuccessPage";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminHome from "./pages/Admin/AdminHome";
import CourseDashboard from "./pages/Admin/CourseDashboard";
import StudentDetails from "./pages/Admin/StudentDetails";
import Analytics from "./pages/Admin/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        {/* Student */}
        <Route path="/" element={<StudentLogin />} />
        <Route path="/register" element ={<RegisterPage />}/>
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/student/register/:course" element={<RegisterCourse />} />
        <Route path="/student/success" element={<SuccessPage />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/dashboard/:course" element={<CourseDashboard />} />
        <Route path="/admin/student/:id" element={<StudentDetails />} />
        <Route path="/admin/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;