import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/api/auth/login",
        formData
      );

      if (res.data.user.role !== "admin") {
        alert("Access denied. Not admin");
        return;
      }

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      navigate("/admin/home");

    } catch (error) {
      alert(error.response?.data?.message || "Admin login failed");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </form>

        <p className="student-link">
          Student? <span onClick={() => navigate("/")}>Login here</span>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;