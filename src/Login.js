import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Backend URL auto detect
  const backendURL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://backend00-duzt.onrender.com"; // Replace with your Render URL

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Login successful");
        console.log("User:", data.user);
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        alert(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
