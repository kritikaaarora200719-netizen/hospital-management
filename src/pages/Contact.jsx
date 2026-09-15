import { useState } from 'react'
import Button from '../components/Button'
import './Pages.css'

// Contact page - info card + controlled contact form with validation
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We are here to help you - reach out anytime</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container contact-grid">
          {/* Contact info */}
          <aside className="contact-info-card">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <span className="ci-icon">📍</span>
                <div>
                  <div className="ci-label">Address</div>
                  <div className="ci-value">123 Health Avenue, Bengaluru, 560001</div>
                </div>
              </li>
              <li>
                <span className="ci-icon">📞</span>
                <div>
                  <div className="ci-label">Phone</div>
                  <div className="ci-value">+91 98765 43210</div>
                </div>
              </li>
              <li>
                <span className="ci-icon">✉️</span>
                <div>
                  <div className="ci-label">Email</div>
                  <div className="ci-value">care@medicarehospital.in</div>
                </div>
              </li>
              <li>
                <span className="ci-icon">🚑</span>
                <div>
                  <div className="ci-label">Emergency</div>
                  <div className="ci-value">1066 (24x7)</div>
                </div>
              </li>
            </ul>
          </aside>

          {/* Contact form */}
          <form className="appointment-form" onSubmit={handleSubmit} noValidate>
            {sent && (
              <div className="success-message">
                Thank you! Your message has been received. We will get back to you soon.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>
            <Button type="submit" variant="solid" className="form-submit">Send Message</Button>
          </form>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-embed">
            <p>🗺️ Map Placeholder - MediCare Hospital, 123 Health Avenue, Bengaluru</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
