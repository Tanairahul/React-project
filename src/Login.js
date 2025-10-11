import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const backendURL = "https://backend00-duzt.onrender.com";

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
        alert(data.message);
        console.log("User:", data.user);
        navigate("/dashboard");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Server unreachable. Check backend URL and CORS.");
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
          autoComplete="email"
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
