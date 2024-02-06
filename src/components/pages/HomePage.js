import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';
import OrgNavbar from './UserNavbar';
import Footer from './Footer';

export default function HomePage() {
  return (
    <>
      <OrgNavbar />
      <div className="text-center">
        <h1 className="main-title home-page-title">Welcome to Our App</h1>

       
        <main class="main flow">
  <h1 class="main__heading">For Insurance Companies</h1>
  <div class="main__cards cards">
    <div class="cards__inner">
      <div class="cards__card card">
        <h2 class="card__price">For Insurance Companies</h2>
        <p class="card__price">$9.99</p>
        <ul role="list" class="card__bullets flow">
          <li>Discover the benefits of our Blockchain-based Accident Data Storage and Insurance Process Automation.</li>
   
        </ul>
        <a href="#basic" class="card__cta cta">Get Started</a>
      </div>

      <div class="cards__card card">
        <h2 class="card__heading">For Police Officers</h2>
        <p class="card__price">$19.99</p>
        <ul role="list" class="card__bullets flow">
          <li>Explore how our platform simplifies Accident Data Storage and enhances the insurance process for law enforcement.</li>
          
        </ul>
        <a href="#pro" class="card__cta cta">Upgrade to Pro</a>
      </div>

      <div class="cards__card card">
        <h2 class="card__price">For Drivers</h2>
        <p class="card__price">$29.99</p>
        <ul role="list" class="card__bullets flow">
          <li>Learn why drivers who have faced accidents should utilize our platform for secure data storage and insurance process automation.</li>
         
        </ul>
        <a href="#ultimate" class="card__cta cta">Go Ultimate</a>
      </div>
    </div>
    
    <div class="overlay cards__inner"></div>
  </div>
</main>

        {/* Button for Dashboard */}
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <button className="primary-button" style={{ marginTop: '1.5rem' }}>Policies</button>
        </Link>

        <Link to="/">
          <button className="primary-button">Log out</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
