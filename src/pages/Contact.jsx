import { useState } from 'react';
import './Contact.css';

const SERVICE_OPTIONS = [
  'Website', 'Application', 'Game', 'Illustration', 'Education', 'Tutoring', 'AI', 'Other',
];

function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', service: '', description: '', budget: '', deadline: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been received.');
  };

  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <span className="section-label">Contact</span>
        <h1 className="section-title">Tell us what you're building.</h1>
        <p className="section-desc">
          Share your project details and we'll get back to you within 24 hours.
        </p>
      </section>

      <form className="contact-page__form" onSubmit={handleSubmit}>
        <div className="contact-page__row">
          <div className="contact-page__field">
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
          </div>
          <div className="contact-page__field">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
          </div>
        </div>

        <div className="contact-page__row">
          <div className="contact-page__field">
            <label>Service</label>
            <select name="service" value={form.service} onChange={handleChange} required>
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="contact-page__field">
            <label>Budget Range</label>
            <select name="budget" value={form.budget} onChange={handleChange}>
              <option value="">Select budget</option>
              <option value="small">Under $500</option>
              <option value="medium">$500 - $2,000</option>
              <option value="large">$2,000 - $10,000</option>
              <option value="enterprise">$10,000+</option>
            </select>
          </div>
        </div>

        <div className="contact-page__field">
          <label>Project Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} required rows={5} placeholder="Tell us about your project, goals, and any references..." />
        </div>

        <div className="contact-page__field">
          <label>Deadline</label>
          <input type="text" name="deadline" value={form.deadline} onChange={handleChange} placeholder="e.g., 2 months, end of year, flexible" />
        </div>

        <button type="submit" className="btn btn--primary contact-page__submit">
          Send Project Inquiry &rarr;
        </button>
      </form>
    </main>
  );
}

export default Contact;
