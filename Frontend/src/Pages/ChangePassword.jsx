import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function ChangePassword() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleChangePassword = () => {
    if (newPass !== confirm) {
      alert("New password and confirmation do not match ❌");
      return;
    }
    alert("Password changed successfully ✅");
    setCurrent("");
    setNewPass("");
    setConfirm("");
    navigate("/profile");
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <span className="details-pill">Security</span>
        <h1>Change Password</h1>
        <p>Choose a strong password to keep your travel account safe.</p>
        <input type="password" placeholder="Current Password" value={current} onChange={(e) => setCurrent(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
        <input type="password" placeholder="Confirm New Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        <button onClick={handleChangePassword}>Save New Password</button>
      </div>
      <Footer />
    </>
  );
}

export default ChangePassword;
