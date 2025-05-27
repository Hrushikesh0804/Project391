import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><button onClick={onLogout}>Logout</button></li>
      </ul>
    </div>
  );
}
