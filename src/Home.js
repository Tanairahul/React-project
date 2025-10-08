import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Signup from "./Signup.js";
import Login from "./Login";
import ph from "./ph.png"
import './App.css';
import './index.css';
import Dashboard from "./Dashboard";


function Home() {
  return (
    < Router basename="/React-project">
      <div className="p-5 border border-gray-400 flex items-center justify-between">
        <nav style={{paddingRight:"10px",margin:"20px",display:"flex",alignItems:"center",border:"1px solid black" }}>
          <img src={ph} style={{height:"50px",width:"50px",padding:"10px"}} alt="rahul" />
          <Link to="/signup" style={{marginRight:"10px",}}><button>Signup</button></Link>
          
          <Link to="/login"><button >Login</button></Link>
        </nav>
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
