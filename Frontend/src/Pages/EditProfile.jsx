import { useState } from "react";
import { useNavigate } from "react-router-dom"
function EditProfile() {
    const navigate = useNavigate();
  const [name, setName] = useState("Anonymous");
  const [email, setEmail] = useState("abcd000@example.com");
  const [phone, setPhone] = useState("+961 70 123 456");
  const [location, setLocation] = useState("Beirut, Lebanon");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Profile</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br /><br />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br /><br />

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <br /><br />
      
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <br /><br />


      <button onClick={() => {
  alert("Profile updated successfully ✅");
  navigate("/profile", {
    state: { name, email, phone, location }
  });
}} >
  Save Changes
</button>
      
 

   
    </div>
  );
}

export default EditProfile;