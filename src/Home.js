import React from "react";
import { Link, Routes, Route, HashRouter as Router } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ph from "./ph.png";

// Default Landing Page view
function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1>Welcome to Our Platform</h1>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Manage your account, track dashboards, and get started easily.
      </p>
      <div>
        <Link to="/signup">
          <button style={{ padding: "10px 20px", marginRight: "10px", cursor: "pointer" }}>
            Get Started
          </button>
        </Link>
        <Link to="/login">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <Router>
      <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
        {/* Navigation Bar */}
        <nav
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
              <img
                src={ph}
                alt="Logo"
                style={{ height: "50px", width: "50px", marginRight: "15px" }}
              />
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>MyApp</span>
            </Link>
          </div>

          <div>
            <Link to="/signup">
              <button style={{ padding: "8px 16px", marginRight: "10px", cursor: "pointer" }}>
                Signup
              </button>
            </Link>
            <Link to="/login">
              <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                Login
              </button>
            </Link>
          </div>
        </nav>

        {/* Dynamic Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
