import { useState } from "react";
import {useNavigate} from "react-router-dom"
function ChangePassword () {
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

  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="Current Password"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={handleChangePassword}  >Save New Password</button>
    </div>
  );
};

export default ChangePassword;
 