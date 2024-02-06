import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';
import Features from './features';
import MainNavbar from './MainNavbar'
import Footer from './Footer';
import Gif from './Gif';

export default function LandingPage() {
  return (
    <>
      <header style={HeaderStyle}>
      <MainNavbar/>
   
        <h1 className="main-title text-center">
          Blockchain-based Accident Data Storage <br />and Insurance Process Automation
        </h1>

        {/* Insurance Organization Section */}
        <div className="organization-section text-center">
          <div style={ButtonContainerStyle}>
            <h2 className="organization-heading">Insurance Organization</h2>
            <Link to="/orglogin">
              <button className="primary-button">Log In</button>
            </Link>
            <Link to="/orgregister">
              <button className="primary-button" id="org_reg_btn">
                <span>Register</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Individual User Section */}
        <div className="individual-user-section text-center">
         <div style={ButtonContainerStyle}>
            <h2 className="individual-user-heading">Individual User</h2>
            <Link to="/login">
              <button className="primary-button">Log In</button>
            </Link>
            <Link to="/register">
              <button className="primary-button" id="ind_reg_btn">
                <span>Register</span>
              </button>
            </Link>
          </div>
        </div>
        
        <Features />
        <br/>
        <br/>
        <Gif/>
        <br/>

        <Footer/>
      </header>
    </>
  );
}

const HeaderStyle = {
  width: '100%',
  height: '290vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
   backgroundColor: 'antiquewhite'
};

const TopRightButtonContainer = {
  position: 'absolute',
  top: '10px',
  right: '10px',

};

const TopleftButtonContainer = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    
  
  };
  

const ButtonContainerStyle = {
  margin: '20px 0',
  marginTop: '60px',
  marginLeft: '300px',
  padding: '20px',
  border: '2px solid #3498db',
  borderRadius: '30px',
  backgroundColor: '#ecf0f1',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '50%',
  boxSizing: 'border-box',
  alignItems: 'center',
};
