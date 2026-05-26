import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function EditProfile() {
  const navigate = useNavigate();
  const [oldUser, setOldUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setOldUser(savedUser);
      setName(savedUser.name || savedUser.username || "");
      setEmail(savedUser.email || "");
      setPhone(savedUser.phone || savedUser.phoneNumber || "");
      setLocation(savedUser.location || "");
    }
  }, []);

  const handleSave = () => {
    const updatedUser = { ...oldUser, name, username: name, email, phone, phoneNumber: oldUser.phoneNumber || phone, location };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully ✅");
    navigate("/profile");
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <span className="details-pill">Account Settings</span>
        <h1>Edit Profile</h1>
        <p>Keep your contact details updated so your receipts and bookings look professional.</p>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
        <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <button onClick={handleSave}>Save Changes</button>
      </div>
      <Footer />
    </>
  );
}

export default EditProfile;
