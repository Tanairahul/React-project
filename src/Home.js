import React from "react";
import { Link, Routes, Route, HashRouter as Router } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ph from "./ph.png";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-card">

        <div className="hero-icon">
          🚀
        </div>

        <h1>Welcome to Our Platform</h1>

        <p>
          Manage your account, track dashboards, and get started easily.
          Everything you need is available in one place.
        </p>

        <div className="hero-buttons">
          <Link to="/signup">
            <button className="primary-btn">
              Get Started
              <span>→</span>
            </button>
          </Link>

          <Link to="/login">
            <button className="secondary-btn">
              Sign In
            </button>
          </Link>
        </div>

        <div className="features">

          <div className="feature-box">
            <div className="feature-icon">🔐</div>
            <h3>Secure</h3>
            <p>Your account is protected.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">📊</div>
            <h3>Dashboard</h3>
            <p>Manage everything easily.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">⚡</div>
            <h3>Fast</h3>
            <p>Simple and quick experience.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

function Home() {
  return (
    <Router>

      {/* ================= CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f5f7fb;
        }

        a {
          text-decoration: none;
        }

        /* ================= MAIN CONTAINER ================= */

        .home-container {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #f5f7ff 0%,
            #eef1ff 50%,
            #f8f9ff 100%
          );
        }

        /* ================= NAVBAR ================= */

        .navbar {
          width: calc(100% - 40px);
          max-width: 1200px;
          margin: 20px auto;
          padding: 12px 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 15px;

          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.07);

          position: relative;
          z-index: 10;
        }

        /* ================= LOGO ================= */

        .logo-link {
          display: flex;
          align-items: center;
          color: #222;
        }

        .logo-image {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 12px;
          margin-right: 12px;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 700;
          color: #333;
        }

        /* ================= NAV BUTTONS ================= */

        .nav-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-signup {
          padding: 10px 18px;
          border: 1px solid #667eea;
          border-radius: 8px;

          background: white;
          color: #667eea;

          font-size: 14px;
          font-weight: 600;

          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-signup:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
        }

        .nav-login {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;

          background: linear-gradient(
            135deg,
            #667eea,
            #764ba2
          );

          color: white;

          font-size: 14px;
          font-weight: 600;

          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-login:hover {
          transform: translateY(-2px);

          box-shadow:
            0 7px 18px rgba(102, 126, 234, 0.3);
        }

        /* ================= LANDING PAGE ================= */

        .landing-page {
          min-height: calc(100vh - 100px);

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 40px 20px 70px;
        }

        .hero-card {
          width: 100%;
          max-width: 950px;

          padding: 60px 40px;

          text-align: center;

          background: white;

          border-radius: 25px;

          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.10);

          border: 1px solid #eeeeee;
        }

        /* ================= HERO ICON ================= */

        .hero-icon {
          width: 85px;
          height: 85px;

          margin: 0 auto 20px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 40px;

          border-radius: 50%;

          background: linear-gradient(
            135deg,
            #667eea,
            #764ba2
          );

          box-shadow:
            0 10px 30px rgba(102, 126, 234, 0.30);
        }

        .hero-card h1 {
          margin: 0;

          font-size: 42px;
          font-weight: 800;

          color: #222;
        }

        .hero-card > p {
          max-width: 650px;

          margin: 18px auto 30px;

          color: #777;

          font-size: 16px;
          line-height: 1.7;
        }

        /* ================= HERO BUTTONS ================= */

        .hero-buttons {
          display: flex;

          justify-content: center;
          align-items: center;

          gap: 15px;

          margin-bottom: 50px;
        }

        .primary-btn {
          min-width: 150px;

          padding: 13px 22px;

          border: none;
          border-radius: 10px;

          background: linear-gradient(
            135deg,
            #667eea,
            #764ba2
          );

          color: white;

          font-size: 15px;
          font-weight: 700;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .primary-btn span {
          margin-left: 8px;
          font-size: 18px;
        }

        .primary-btn:hover {
          transform: translateY(-3px);

          box-shadow:
            0 10px 25px rgba(102, 126, 234, 0.35);
        }

        .secondary-btn {
          min-width: 130px;

          padding: 12px 22px;

          border: 2px solid #667eea;
          border-radius: 10px;

          background: white;

          color: #667eea;

          font-size: 15px;
          font-weight: 700;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: #667eea;
          color: white;

          transform: translateY(-3px);
        }

        /* ================= FEATURES ================= */

        .features {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;

          max-width: 800px;

          margin: auto;
        }

        .feature-box {
          padding: 25px 15px;

          background: #f8f9ff;

          border: 1px solid #eeeeee;

          border-radius: 15px;

          transition: all 0.3s ease;
        }

        .feature-box:hover {
          transform: translateY(-5px);

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .feature-icon {
          font-size: 30px;

          margin-bottom: 10px;
        }

        .feature-box h3 {
          margin: 5px 0 8px;

          color: #333;

          font-size: 17px;
        }

        .feature-box p {
          margin: 0;

          color: #888;

          font-size: 13px;
          line-height: 1.5;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 700px) {

          .navbar {
            width: calc(100% - 24px);
            margin: 12px auto;

            padding: 10px 12px;
          }

          .logo-image {
            width: 42px;
            height: 42px;
          }

          .logo-text {
            font-size: 17px;
          }

          .nav-buttons {
            gap: 5px;
          }

          .nav-signup,
          .nav-login {
            padding: 8px 11px;
            font-size: 12px;
          }

          .landing-page {
            padding: 25px 12px 50px;
          }

          .hero-card {
            padding: 40px 20px;

            border-radius: 20px;
          }

          .hero-icon {
            width: 70px;
            height: 70px;

            font-size: 32px;
          }

          .hero-card h1 {
            font-size: 29px;
          }

          .hero-card > p {
            font-size: 14px;
          }

          .hero-buttons {
            flex-direction: column;

            margin-bottom: 35px;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            max-width: 250px;
          }

          .features {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 400px) {

          .logo-text {
            display: none;
          }

          .nav-signup,
          .nav-login {
            padding: 8px 9px;
          }

          .hero-card h1 {
            font-size: 25px;
          }

        }

      `}</style>

      {/* ================= PAGE ================= */}

      <div className="home-container">

        {/* ================= NAVBAR ================= */}

        <nav className="navbar">

          <Link to="/" className="logo-link">

            <img
              src={ph}
              alt="Logo"
              className="logo-image"
            />

            <span className="logo-text">
              MyApp
            </span>

          </Link>

          <div className="nav-buttons">

            <Link to="/signup">
              <button className="nav-signup">
                Signup
              </button>
            </Link>

            <Link to="/login">
              <button className="nav-login">
                Login
              </button>
            </Link>

          </div>

        </nav>

        {/* ================= ROUTES ================= */}

        <Routes>

          <Route
            path="/"
            element={<LandingPage />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Routes>

      </div>

    </Router>
  );
}

export default Home;
