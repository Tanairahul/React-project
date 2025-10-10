import React from "react";
import { Link, Routes, Route, HashRouter as Router } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ph from "./ph.png";
import "./App.css";
import "./index.css";

function Home() {
  return (
    <Router>
      <div style={{ maxWidth: "900px", margin: "auto" }}>
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
            <img
              src={ph}
              alt="Logo"
              style={{ height: "50px", width: "50px", marginRight: "15px" }}
            />
            <Link to="/signup">
              <button style={{ marginRight: "10px" }}>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;

