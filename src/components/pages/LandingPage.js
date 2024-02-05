import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './LandingPage.css';
import DarkMode from './DarkMode';

export default function LandingPage() {
    return (
        <>
            <DarkMode />
            <header style={HeaderStyle}>
                <h1 className="main-title text-center">Blockchain-based Accident Data Storage <br />and Insurance Process Automation</h1>

                {/* Insurance Organization Section */}
                <div className="organization-section text-center">
            
                    <div style={ButtonContainerStyle}>
                    <h2 className="organization-heading">Insurance Organization</h2>
                        <Link to="/orglogin">
                            <button className="primary-button">Log In</button>
                        </Link>
                        <Link to="/orgregister">
                            <button className="primary-button" id="org_reg_btn"><span>Register</span></button>
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
                            <button className="primary-button" id="ind_reg_btn"><span>Register</span></button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    
}

const ButtonContainerStyle = {
    margin: '20px 0',             // Margin shorthand
    marginTop: '60px', 
    marginLeft: '300px',           // Specific top margin
    padding: '20px',
    border: '2px solid #3498db',  // Blue border color
    borderRadius: '10px',         // Rounded corners
    backgroundColor: '#ecf0f1',   // Light background color
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Box shadow for a subtle lift
    width: '50%',                // Full-width
    boxSizing: 'border-box',       // Include padding and border in the width calculation
    alignItems: 'center', 
}
