import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function submit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.email.endsWith("law.ac.in")) {
      alert("Only college email addresses (law.ac.in) are allowed!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/signup", formData);

      if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {
        history("/home", { state: { name: formData.fullName } });
      }
    } catch (e) {
      alert("Error saving data. Please try again!");
      console.log(e);
    }
  }

  return (
    <div style={{
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
    }}>
      <div className="signup-container" style={{
        width: "100%",
        maxWidth: "400px",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px", fontSize: "1.6rem", fontWeight: "bold" }}>
          College Signup Portal
        </h2>
        <form onSubmit={submit}>
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required 
            style={{
              width: "100%", padding: "12px", marginBottom: "16px", border: "1px solid #ccc",
              borderRadius: "8px", fontSize: "1rem"
            }}
          />
          <input type="email" name="email" placeholder="College Email Address" onChange={handleChange} required 
            style={{
              width: "100%", padding: "12px", marginBottom: "16px", border: "1px solid #ccc",
              borderRadius: "8px", fontSize: "1rem"
            }}
          />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required 
            style={{
              width: "100%", padding: "12px", marginBottom: "16px", border: "1px solid #ccc",
              borderRadius: "8px", fontSize: "1rem"
            }}
          />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required 
            style={{
              width: "100%", padding: "12px", marginBottom: "16px", border: "1px solid #ccc",
              borderRadius: "8px", fontSize: "1rem"
            }}
          />
          <button type="submit"
            style={{
              width: "100%", padding: "12px", border: "none", borderRadius: "8px",
              backgroundColor: "#007bff", color: "#fff", fontSize: "1rem",
              cursor: "pointer", transition: "0.3s ease"
            }}
          >
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#666" }}>
          Already have an account? <Link to="/login" style={{ color: "#007bff", textDecoration: "underline" }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
