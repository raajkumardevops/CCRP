import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./StudentLogin.css";

function Login() {
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

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      navigate("/student/home");

    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Student Login</h2>

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

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="divider">or</div>

          <button type="button" className="google-btn">
            Login with Google
          </button>

          <button type="button" className="github-btn">
            Login with GitHub
          </button>
        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>

        <p className="admin-link">
          Admin?{" "}
          <span onClick={() => navigate("/admin/login")}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;