import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import "./AuthPages.css";

function ResetPassword() {
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        `/api/auth/reset-password/${token}`,
        {
          newPassword: password
        }
      );

      alert(res.data.message);

    } catch (error) {
      alert(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="auth-password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="auth-toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button className="auth-btn" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;