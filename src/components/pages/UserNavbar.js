import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const UserNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">D APP</div>
        <div className="nav-links">
          <Link to="/dashboard" className="nav-link">
            View Policies
          </Link>
          <Link to="/UserProfile" className="nav-link">
            User Profile
          </Link>
          <Link to="/dashboard" className="nav-link">
            Transaction
          </Link>
        </div>
        <div className="dapp-link">
          <Link to="/">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
