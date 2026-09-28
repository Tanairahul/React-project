import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://backend00-duzt.onrender.com/signup",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert(res.data.message || "Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");
      setShowPassword(false);
    } catch (err) {
      alert(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Signup failed. Please try again."
      );

      console.error(err);
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .signup-page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 15px;

          background:
            radial-gradient(
              circle at top left,
              #dbeafe 0%,
              transparent 35%
            ),
            radial-gradient(
              circle at bottom right,
              #e0e7ff 0%,
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #f8fafc,
              #eef2ff
            );
        }

        .signup-card {
          width: 100%;
          max-width: 430px;
          padding: 40px;

          background: rgba(255, 255, 255, 0.96);

          border-radius: 22px;

          box-shadow:
            0 20px 50px rgba(15, 23, 42, 0.12),
            0 5px 15px rgba(15, 23, 42, 0.06);

          border: 1px solid rgba(255, 255, 255, 0.8);

          animation: signupAnimation 0.6s ease;
        }

        @keyframes signupAnimation {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .signup-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .signup-logo {
          width: 65px;
          height: 65px;

          margin: 0 auto 18px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 18px;

          font-size: 30px;

          background: linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
          );

          box-shadow:
            0 10px 25px rgba(37, 99, 235, 0.3);
        }

        .signup-header h1 {
          margin: 0;

          color: #111827;

          font-size: 30px;
          font-weight: 700;
        }

        .signup-header p {
          margin-top: 9px;

          color: #6b7280;

          font-size: 15px;
        }

        .signup-form {
          width: 100%;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;

          margin-bottom: 8px;

          color: #374151;

          font-size: 14px;
          font-weight: 600;
        }

        .input-wrapper {
          position: relative;
          width: 100%;
        }

        .input-icon {
          position: absolute;

          left: 15px;
          top: 50%;

          transform: translateY(-50%);

          font-size: 17px;

          z-index: 2;
        }

        .input-wrapper input {
          width: 100%;
          height: 52px;

          padding: 0 15px 0 46px;

          border: 1px solid #d1d5db;

          border-radius: 11px;

          outline: none;

          background: #f9fafb;

          color: #111827;

          font-size: 15px;

          transition: all 0.25s ease;
        }

        .input-wrapper input::placeholder {
          color: #9ca3af;
        }

        .input-wrapper input:focus {
          border-color: #2563eb;

          background: #ffffff;

          box-shadow:
            0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .show-password {
          position: absolute;

          right: 12px;
          top: 50%;

          transform: translateY(-50%);

          border: none;

          background: transparent;

          color: #2563eb;

          font-size: 12px;

          font-weight: 600;

          cursor: pointer;
        }

        .show-password:hover {
          color: #1d4ed8;
        }

        .terms {
          display: flex;

          align-items: center;

          gap: 8px;

          margin: 5px 0 22px;

          color: #6b7280;

          font-size: 13px;

          cursor: pointer;
        }

        .terms input {
          width: 15px;
          height: 15px;

          cursor: pointer;

          accent-color: #2563eb;
        }

        .signup-button {
          width: 100%;
          height: 53px;

          display: flex;

          justify-content: center;
          align-items: center;

          gap: 10px;

          border: none;

          border-radius: 11px;

          background: linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
          );

          color: white;

          font-size: 16px;

          font-weight: 600;

          cursor: pointer;

          box-shadow:
            0 8px 20px rgba(37, 99, 235, 0.25);

          transition: all 0.25s ease;
        }

        .signup-button span {
          font-size: 21px;

          transition: transform 0.25s ease;
        }

        .signup-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 12px 25px rgba(37, 99, 235, 0.35);
        }

        .signup-button:hover span {
          transform: translateX(5px);
        }

        .signup-button:active {
          transform: translateY(0);
        }

        .login-section {
          text-align: center;

          margin-top: 26px;

          padding-top: 21px;

          border-top: 1px solid #e5e7eb;
        }

        .login-section p {
          display: inline;

          margin: 0;

          color: #6b7280;

          font-size: 14px;
        }

        .login-section a {
          margin-left: 5px;

          color: #2563eb;

          font-size: 14px;

          font-weight: 600;

          text-decoration: none;

          cursor: pointer;
        }

        .login-section a:hover {
          text-decoration: underline;

          color: #1d4ed8;
        }

        @media (max-width: 500px) {
          .signup-page {
            padding: 20px 12px;
          }

          .signup-card {
            padding: 30px 22px;

            border-radius: 18px;
          }

          .signup-header h1 {
            font-size: 26px;
          }

          .signup-logo {
            width: 58px;
            height: 58px;

            font-size: 26px;
          }
        }
      `}</style>

      {/* ================= SIGNUP PAGE ================= */}

      <div className="signup-page">
        <div className="signup-card">

          {/* Header */}
          <div className="signup-header">
            <div className="signup-logo">
              👤
            </div>

            <h1>Create Account</h1>

            <p>
              Sign up to get started with your account
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="signup-form"
          >

            {/* Name */}
            <div className="input-group">
              <label>Full Name</label>

              <div className="input-wrapper">
                <span className="input-icon">
                  👤
                </span>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="input-group">
              <label>Email Address</label>

              <div className="input-wrapper">
                <span className="input-icon">
                  ✉️
                </span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <div className="input-wrapper">
                <span className="input-icon">
                  🔒
                </span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                  minLength={6}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="terms">
              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the terms and conditions
              </span>
            </label>

            {/* Signup Button */}
            <button
              type="submit"
              className="signup-button"
            >
              Create Account

              <span>
                →
              </span>
            </button>

          </form>

          {/* Login Section */}
          <div className="login-section">
            <p>
              Already have an account?
            </p>
        
             <Link to="/login"> 
              <button className="nav-login"> 
                Login 
    
            </Link>  

<Routes>
              <Route
            path="/login"
            element={<Login />}
          />
              </Routes>

          </div>

        </div>
      </div>
    </>
  );
}

export default Signup;
