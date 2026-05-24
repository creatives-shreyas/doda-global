import { useState } from 'react';
import MagneticButton from '../motion/MagneticButton';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', country: '', subject: 'Export Inquiry', message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', country: '', subject: 'Export Inquiry', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-name">Full Name *</label>
          <input type="text" id="cf-name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-email">Email Address *</label>
          <input type="email" id="cf-email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-phone">Phone Number</label>
          <input type="tel" id="cf-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-company">Company Name</label>
          <input type="text" id="cf-company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-country">Country</label>
          <input type="text" id="cf-country" name="country" value={formData.country} onChange={handleChange} placeholder="Your country" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-subject">Subject *</label>
          <select id="cf-subject" name="subject" value={formData.subject} onChange={handleChange} required>
            <option value="Export Inquiry">Export Inquiry</option>
            <option value="Domestic Supply">Domestic Supply</option>
            <option value="Partnership">Partnership</option>
            <option value="Product Sample">Product Sample Request</option>
            <option value="General">General Inquiry</option>
          </select>
        </div>
      </div>
      <div className="contact-form__field">
        <label htmlFor="cf-message">Message *</label>
        <textarea id="cf-message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell us about your requirements..." />
      </div>
      <MagneticButton
        className={`btn btn-primary btn-lg contact-form__submit ${status === 'sending' ? 'contact-form__submit--sending' : ''}`}
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
      </MagneticButton>
      {status === 'success' && (
        <p className="contact-form__success">Thank you! We'll get back to you within 24 hours.</p>
      )}
    </form>
  );
}
