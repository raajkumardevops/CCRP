import { useState } from "react";
import API from "../../services/api";
import "./AuthPages.css"

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/forgot-password", { email });
      alert(res.data.message);
    } catch (error) {
      alert("Failed");
    }
  };

  return (
   <div className="auth-container">
  <div className="auth-card">
    <h2>Forgot Password</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button className="auth-btn" type="submit">
        Send Reset Link
      </button>
    </form>
  </div>
</div>
  );
}

export default ForgotPassword;