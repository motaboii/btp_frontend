import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './LandingPage.css';
import DarkMode from './DarkMode';


export default function LandingPage() {
    

    return (
        <>

        <DarkMode/>
        <header style={ HeaderStyle }>
            <h1   className="main-title text-center">Blockchain-based Accident Data Storage <br/>and
Insurance Process Automation</h1>
            <p className="main-para text-center">join us</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
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