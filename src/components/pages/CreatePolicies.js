import React, { useState } from 'react';
import './CreatePolicy.css';

const CreatePolicy = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    policyName: '',
    policyId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log('Form data submitted:', formData);
    // Reset form fields after submission
    setFormData({
      organizationName: '',
      policyName: '',
      policyId: '',
    });
  };

  return (
    <div className="create-policy-container">
      <h2>Create Policy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="organizationName">Organization Name:</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="policyName">Policy Name:</label>
          <input
            type="text"
            id="policyName"
            name="policyName"
            value={formData.policyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="policyId">Policy ID:</label>
          <input
            type="text"
            id="policyId"
            name="policyId"
            value={formData.policyId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePolicy;
