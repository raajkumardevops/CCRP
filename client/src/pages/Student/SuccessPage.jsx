import { useNavigate } from "react-router-dom";
import "./SuccessPage.css";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <h2>Application Submitted Successfully 🎉</h2>
        <p>
          Your application has been received. Our team will review your details
          and contact you soon.
        </p>

        <button onClick={() => navigate("/student/home")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;