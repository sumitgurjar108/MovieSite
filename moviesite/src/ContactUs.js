import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   const [errors, setErrors] = useState({});

   // Handle form input changes
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   // Simple form validation
   const validateForm = () => {
      let formErrors = {};

      if (!formData.name) {
         formErrors.name = 'Name is required';
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email || !emailPattern.test(formData.email)) {
         formErrors.email = 'Valid email is required';
      }

      if (!formData.message) {
         formErrors.message = 'Message is required';
      }

      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
   };

   // Handle form submission
   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         alert('Message sent successfully!');
         // Clear form
         setFormData({
            name: '',
            email: '',
            message: ''
         });
         setErrors({});
      }
   };

   return (
      <div className="contact-container">
         <h2>Contact Us</h2>
         <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
               />
               {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
               />
               {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
               <label htmlFor="message">Message</label>
               <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="5"
               />
               {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
         </form>
      </div>
   );
};

export default ContactUs;
