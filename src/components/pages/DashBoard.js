import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.css'
import UserNavbar from './UserNavbar';

const policiesData = [
  {
    id: 1,
    policyName: 'Policy 1',
    companyName: 'Company A',
    policyId: 'P001',
  },
  {
    id: 2,
    policyName: 'Policy 2',
    companyName: 'Company B',
    policyId: 'P002',
  },
  {
    id: 3,
    policyName: 'Policy 3',
    companyName: 'Company C',
    policyId: 'P003',
  },
  {
    id: 4,
    policyName: 'Policy 4',
    companyName: 'Company D',
    policyId: 'P004',
  },
  {
    id: 5,
    policyName: 'Policy 5',
    companyName: 'Company E',
    policyId: 'P005',
  },
  {
    id: 6,
    policyName: 'Policy 6',
    companyName: 'Company F',
    policyId: 'P006',
  },
];

const Policies = () => {
  return (
    <>
      <UserNavbar/>

    <div className="policies-container">
      <h2>Insurance Policies</h2>
      <div className="policy-cards">
        {policiesData.map((policy) => (
          <div key={policy.id} className="policy-card">
            <h3>{policy.policyName}</h3>
            <p>Company: {policy.companyName}</p>
            <p>ID: {policy.policyId}</p>
            <Link to="/fullpolicy">
              <button className="view-full-button">View Full</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Policies;
