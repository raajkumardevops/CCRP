import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "student" && password === "1234") {
      navigate("/student/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Student Login</h2>

        <form onSubmit={handleLogin}>

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Password */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Login */}
          <button type="submit" className="login-btn">
            Login
          </button>

          {/* OAuth Section */}
          <div className="divider">or</div>

          <button type="button" className="google-btn">
            Login with Google
          </button>

          <button type="button" className="github-btn">
            Login with GitHub
          </button>
        </form>

        {/* Register */}
        <p className="register-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>

        {/* Admin */}
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