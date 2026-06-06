import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem(
      "popxUser",
      JSON.stringify(formData)
    );

    navigate("/account");
  };

  const isFormValid =
  formData.fullName.trim() !== "" &&
  formData.phone.trim() !== "" &&
  formData.email.trim() !== "" &&
  formData.password.trim() !== "";

  return (
    <MobileLayout>
      <div className="register-page">
        <h1 className="register-title">
          Create your
          <br />
          PopX account
        </h1>

        <InputField
          label="Full Name"
          required
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Marry Doe"
        />

        <InputField
          label="Phone number"
          required
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="9876543210"
        />

        <InputField
          label="Email address"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="marry@example.com"
        />

        <InputField
          label="Password"
          required
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="********"
        />

        <InputField
          label="Company name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
        />

        <div className="agency-section">
  <p>
    Are you an Agency?
    <span className="required">*</span>
  </p>

  <div className="radio-options">
    <label>
      <input
        type="radio"
        checked={formData.agency === "yes"}
        onChange={() =>
          setFormData({ ...formData, agency: "yes" })
        }
      />
      Yes
    </label>

    <label>
      <input
        type="radio"
        checked={formData.agency === "no"}
        onChange={() =>
          setFormData({ ...formData, agency: "no" })
        }
      />
      No
    </label>
  </div>
</div>

<div className="bottom-button">
  <Button
    text="Create Account"
    onClick={handleSubmit}
    disabled={!isFormValid}
  />
</div>
      </div>
    </MobileLayout>
  );
}

export default Register;