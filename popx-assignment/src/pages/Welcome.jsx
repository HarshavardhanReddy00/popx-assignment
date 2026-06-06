import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import Button from "../components/Button";

function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <Button
          text="Create Account"
          variant="primary"
          onClick={() => navigate("/register")}
        />

        <Button
          text="Already Registered? Login"
          variant="secondary"
          onClick={() => navigate("/login")}
        />
      </div>
    </MobileLayout>
  );
}

export default Welcome;