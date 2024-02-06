import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';
import Features from './features';
import MainNavbar from './MainNavbar'
import Footer from './Footer';
import Gif from './Gif';
import MiddleSection from './MiddleSection';
import Meet from './Meet';

export default function LandingPage() {
  return (
    <>
      <header style={HeaderStyle}>

      <MainNavbar/>
   
        <h1 className="main-title text-center">
          Blockchain-based Accident Data Storage <br />and Insurance Process Automation
        </h1>
        <br/>
        <br/>
<MiddleSection/>
    
        
        <Features />
        
        <br/>
        <br/>
        <Gif/>
        <br/>
        <Meet/>
        <Footer/>
        <br/>
        <br/>
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
   backgroundColor: 'rgb(255, 255, 255)'
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
