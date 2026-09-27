import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        alert(data.message || "Login successful!");

        console.log("User:", data.user);

        // User information save
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        navigate("/dashboard");
      } else {
        alert(
          data.error ||
          data.message ||
          "Invalid email or password"
        );
      }

    } catch (err) {

      console.error("Fetch error:", err);

      alert(
        "Server unreachable. Check backend URL and CORS."
      );
    }
  };

  return (
    <>
      {/* ================= CSS ================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .login-page {
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


        /* ================= CARD ================= */

        .login-card {
          width: 100%;
          max-width: 430px;

          padding: 40px;

          background: rgba(
            255,
            255,
            255,
            0.96
          );

          border-radius: 22px;

          border: 1px solid
            rgba(255, 255, 255, 0.8);

          box-shadow:
            0 20px 50px
              rgba(15, 23, 42, 0.12),
            0 5px 15px
              rgba(15, 23, 42, 0.06);

          animation: loginAnimation
            0.6s ease;
        }


        /* ================= ANIMATION ================= */

        @keyframes loginAnimation {

          from {
            opacity: 0;
            transform:
              translateY(25px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }

        }


        /* ================= HEADER ================= */

        .login-header {
          text-align: center;

          margin-bottom: 30px;
        }


        .login-logo {
          width: 65px;
          height: 65px;

          margin: 0 auto 18px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 18px;

          font-size: 30px;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

          box-shadow:
            0 10px 25px
              rgba(37, 99, 235, 0.3);
        }


        .login-header h1 {
          margin: 0;

          color: #111827;

          font-size: 30px;

          font-weight: 700;
        }


        .login-header p {
          margin-top: 9px;

          color: #6b7280;

          font-size: 15px;
        }


        /* ================= FORM ================= */

        .login-form {
          width: 100%;
        }


        /* ================= INPUT GROUP ================= */

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


        /* ================= INPUT ================= */

        .input-wrapper {
          position: relative;

          width: 100%;
        }


        .input-icon {
          position: absolute;

          left: 15px;
          top: 50%;

          transform:
            translateY(-50%);

          font-size: 17px;

          z-index: 2;
        }


        .input-wrapper input {
          width: 100%;

          height: 52px;

          padding:
            0 15px 0 46px;

          border: 1px solid
            #d1d5db;

          border-radius: 11px;

          outline: none;

          background: #f9fafb;

          color: #111827;

          font-size: 15px;

          transition:
            all 0.25s ease;
        }


        .input-wrapper input::placeholder {
          color: #9ca3af;
        }


        .input-wrapper input:focus {
          border-color: #2563eb;

          background: #ffffff;

          box-shadow:
            0 0 0 4px
              rgba(
                37,
                99,
                235,
                0.1
              );
        }


        /* ================= SHOW PASSWORD ================= */

        .show-password {
          position: absolute;

          right: 12px;
          top: 50%;

          transform:
            translateY(-50%);

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


        /* ================= OPTIONS ================= */

        .login-options {
          display: flex;

          justify-content:
            space-between;

          align-items: center;

          margin:
            4px 0 25px;

          font-size: 13px;
        }


        .remember {
          display: flex;

          align-items: center;

          gap: 7px;

          color: #6b7280;

          cursor: pointer;
        }


        .remember input {
          width: 15px;
          height: 15px;

          cursor: pointer;

          accent-color: #2563eb;
        }


        .forgot-password {
          border: none;

          background: transparent;

          padding: 0;

          color: #2563eb;

          font-size: 13px;

          font-weight: 600;

          cursor: pointer;
        }


        .forgot-password:hover {
          text-decoration: underline;
        }


        /* ================= LOGIN BUTTON ================= */

        .login-button {
          width: 100%;

          height: 53px;

          display: flex;

          justify-content: center;

          align-items: center;

          gap: 10px;

          border: none;

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

          color: white;

          font-size: 16px;

          font-weight: 600;

          cursor: pointer;

          box-shadow:
            0 8px 20px
              rgba(37, 99, 235, 0.25);

          transition:
            all 0.25s ease;
        }


        .login-button span {
          font-size: 21px;

          transition:
            transform 0.25s ease;
        }


        .login-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 12px 25px
              rgba(
                37,
                99,
                235,
                0.35
              );
        }


        .login-button:hover span {
          transform:
            translateX(5px);
        }


        .login-button:active {
          transform:
            translateY(0);
        }


        /* ================= REGISTER ================= */

        .register-section {
          text-align: center;

          margin-top: 26px;

          padding-top: 21px;

          border-top:
            1px solid #e5e7eb;
        }


        .register-section p {
          display: inline;

          margin: 0;

          color: #6b7280;

          font-size: 14px;
        }


        .register-button {
          margin-left: 5px;

          border: none;

          background: transparent;

          color: #2563eb;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;
        }


        .register-button:hover {
          text-decoration: underline;
        }


        /* ================= MOBILE ================= */

        @media (max-width: 500px) {

          .login-page {
            padding:
              20px 12px;
          }


          .login-card {
            padding:
              30px 22px;

            border-radius: 18px;
          }


          .login-header h1 {
            font-size: 26px;
          }


          .login-logo {
            width: 58px;
            height: 58px;

            font-size: 26px;
          }


          .login-options {
            font-size: 12px;
          }


          .forgot-password {
            font-size: 12px;
          }

        }

      `}</style>


      {/* ================= LOGIN PAGE ================= */}

      <div className="login-page">

        <div className="login-card">

          {/* Header */}

          <div className="login-header">

            <div className="login-logo">
              🔐
            </div>

            <h1>
              Welcome Back
            </h1>

            <p>
              Login to your account
              to continue
            </p>

          </div>


          {/* Login Form */}

          <form
            onSubmit={handleLogin}
            className="login-form"
          >

            {/* Email */}

            <div className="input-group">

              <label>
                Email Address
              </label>

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

              <label>
                Password
              </label>

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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  required
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>


            {/* Remember Me */}

            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>


              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  alert(
                    "Forgot password feature will be added soon."
                  )
                }
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

              <span>
                →
              </span>

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
              onClick={() =>
                navigate("/signup")
              }
            >
              Create New Account
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Login;
