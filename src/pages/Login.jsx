import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../data/auth'
import './Pages.css'

// Simple academic login - user picks a role and enters email + password.
// No real authentication - any non-empty values are accepted.
function Login() {
  const [role, setRole] = useState('Patient')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic validation - not real security
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password')
      return
    }
    // Derive a friendly name from the email for the portal header
    const name = email.split('@')[0].replace(/[._]/g, ' ')
    const formattedName = name.replace(/\b\w/g, (c) => c.toUpperCase())
    login(role, email, formattedName)

    // Redirect to the correct portal based on role
    if (role === 'Patient') navigate('/portal/patient')
    else if (role === 'Doctor') navigate('/portal/doctor')
    else if (role === 'Receptionist') navigate('/portal/receptionist')
  }

  const roles = [
    { key: 'Patient', icon: '🧑' },
    { key: 'Doctor', icon: '👨‍⚕️' },
    { key: 'Receptionist', icon: '🧑‍💼' },
  ]

  return (
    <main className="login-page">
      <div className="login-card">
        <h2>Welcome to MediCare</h2>
        <p className="login-sub">Sign in to access your portal</p>

        {/* Role selector */}
        <div className="role-selector" role="radiogroup" aria-label="Select role">
          {roles.map((r) => (
            <button
              type="button"
              key={r.key}
              className={`role-option ${role === r.key ? 'selected' : ''}`}
              onClick={() => setRole(r.key)}
              aria-pressed={role === r.key}
            >
              <span className="role-icon">{r.icon}</span>
              {r.key}
            </button>
          ))}
        </div>

        {error && (
          <div className="success-message" style={{ background: 'var(--error-light)', color: '#991b1b', borderColor: '#fecaca' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter any password"
            />
          </div>
          <button type="submit" className="btn btn-solid form-submit">Sign In</button>
        </form>

        <p className="login-hint">
          Academic demo only - enter any email and password to continue.
        </p>
      </div>
    </main>
  )
}

export default Login
