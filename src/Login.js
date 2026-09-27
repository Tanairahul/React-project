import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const backendURL = "https://backend00-duzt.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        console.log("User:", data.user);

        // User information save kar sakte hain
        localStorage.setItem("user", JSON.stringify(data.user));

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
    <div className="login-page">

      <div className="login-card">

        {/* Logo / Heading */}
        <div className="login-header">
          <div className="login-logo">🔐</div>

          <h1>Welcome Back</h1>

          <p>
            Login to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <span className="input-icon">✉️</span>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <span className="input-icon">🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="forgot-password"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-button"
          >
            Login
            <span>→</span>
          </button>

        </form>

        {/* Register */}
        <div className="register-section">
          <p>
            Don't have an account?
          </p>

          <button
            type="button"
            className="register-button"
            onClick={() => navigate("/register")}
          >
            Create New Account
          </button>
        </div>

      </div>

    </div>
  );
}

export default Login;
