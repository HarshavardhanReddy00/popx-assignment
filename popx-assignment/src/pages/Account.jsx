import { useEffect, useState } from "react";
import MobileLayout from "../components/MobileLayout";

function Account() {
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "marrydoe@gmail.com",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("popxUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <MobileLayout>
      <div className="account-page">
        <div className="account-header">
          Account Settings
        </div>

        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Profile"
              className="profile-image"
            />

            <div className="camera-badge">
              📷
            </div>
          </div>

          <div className="profile-details">
            <h3>{user.fullName}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="account-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur
          Sadipscing Elitr, Sed Diam Nonumy Eirmod
          Tempor Invidunt Ut Labore Et Dolore Magna
          Aliquyam Erat, Sed Diam.
        </div>

        <div className="dashed-line"></div>
      </div>
    </MobileLayout>
  );
}

export default Account;