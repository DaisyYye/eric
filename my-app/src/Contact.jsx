import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    emailjs.init({
      publicKey: '29gU3Frte62NQMB-e',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_j83cqq7',
        'template_7kkkucb',
        e.target
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      console.log('Service ID:', 'service_j83cqq');
      console.log('Template ID:', 'template_46h38id');
      console.log('Error details:', error.text);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-box">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Send me a message and I'll respond as soon as possible</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
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
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your inquiry..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {submitStatus === 'success' && (
          <div className="alert alert-success">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="alert alert-error">
            ✗ Error sending message. Please try again or email me directly.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
