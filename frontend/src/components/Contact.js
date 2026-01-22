import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <p>rishitharkulal04@gmail.com</p>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <p>https://www.linkedin.com/in/rishitha-r-6940b2375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</p>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong>
                <p>https://github.com/rishitharkulal04</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Rishitha R"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="rishitharkulal04@gmail.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button onClick={handleSubmit} className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;