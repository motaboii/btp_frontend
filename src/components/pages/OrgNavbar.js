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
            Create Policies
          </Link>
          <Link to="/CreatePolicies" className="nav-link">
            Company Profile
          </Link>
          <Link to="/dashboard" className="nav-link">
            Transaction
          </Link>
        </div>
        <div>
          <Link to="/" className="dapp-link">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
