import React from 'react';
import './fullpolicy.css';
import UserNavbar from './OrgNavbar';

const FullPolicy = () => {
  return (
    <>
   <UserNavbar/>

    <div className="full-policy-container">
      <div className="policy-image">
        {/* Replace the placeholder image with the actual image URL */}
        <img src="https://via.placeholder.com/300" alt="Policy" />
      </div>
      <div className="policy-details">
        <h2>Policy Name:</h2>
        <p>Policy No: </p>
        <p>Company: </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat.
        </p>
      </div>
    </div>
    </>
  );
};

export default FullPolicy;
