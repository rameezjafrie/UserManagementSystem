import React, { useState } from 'react';
import { createUser } from '../services/userService';

const UserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'User'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call Spring Boot API via Axios
    createUser(formData)
      .then((response) => {
        console.log('Saved to DB:', response.data);
        // Reset form inputs
        setFormData({ firstName: '', lastName: '', email: '', role: 'User' });
        if (onUserAdded) onUserAdded();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center mt-3">Add New User</h3>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                name="role"
                className="form-select"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit / Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;