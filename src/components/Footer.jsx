import { Link } from 'react-router-dom'
import './Footer.css'

// Site footer with quick links and contact info
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <article className="footer-col">
            <h4 className="footer-logo">
              <span className="logo-icon">+</span> MediCare Hospital
            </h4>
            <p>
              Compassionate care and advanced healthcare for our community,
              available 24x7 with expert doctors and modern facilities.
            </p>
          </article>

          <nav className="footer-col" aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/doctors">Find a Doctor</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Departments">
            <h4>Departments</h4>
            <ul>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>
              <li>Emergency Medicine</li>
            </ul>
          </nav>

          <address className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>123 Health Avenue, Bengaluru, 560001</li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: care@medicarehospital.in</li>
              <li>Emergency: 1066 (24x7)</li>
            </ul>
          </address>
        </div>

        <div className="footer-bottom">
          <p>© {year} MediCare Hospital. Academic project for B.Tech Viva demonstration.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
