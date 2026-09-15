import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

// Responsive navbar with mobile hamburger menu
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/services', label: 'Services' },
  { to: '/appointment', label: 'Appointment' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu when a link is clicked
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">+</span>
          <span className="logo-text">MediCare</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/login" className="nav-login-btn" onClick={closeMenu}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
