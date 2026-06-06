import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    navigate("/account");
  };

  const isValid =
    formData.email.trim() !== "" &&
    formData.password.trim() !== "";

  return (
    <MobileLayout>
      <div className="login-page">
        <h1 className="login-title">
          Signin to your
          <br />
          PopX account
        </h1>

        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button
          text="Login"
          onClick={handleLogin}
          disabled={!isValid}
        />
      </div>
    </MobileLayout>
  );
}

export default Login;