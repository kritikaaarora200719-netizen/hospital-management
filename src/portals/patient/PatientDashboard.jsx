import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../data/auth'
import { getItem, STORAGE_KEYS } from '../../data/storage'
import doctors from '../../data/doctors'
import '../PortalPages.css'

// Patient dashboard - overview of appointments and quick info
function PatientDashboard() {
  const { session } = useAuth()
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const all = getItem(STORAGE_KEYS.appointments)
    // Filter appointments matching this logged-in patient's email
    const mine = all.filter((a) => a.email === session.email)
    setAppointments(mine)
  }, [session.email])

  const upcoming = appointments[0]
  const upcomingDoctor = upcoming
    ? doctors.find((d) => d.name === upcoming.doctor)
    : null

  return (
    <section>
      <h1>Welcome, {session.name}!</h1>
      <p className="portal-sub">Here is an overview of your health dashboard.</p>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-value">{appointments.length}</div>
          <div className="stat-label">Total Appointments</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏰</div>
          <div className="stat-value">{appointments.filter((a) => a.status === 'Confirmed').length}</div>
          <div className="stat-label">Upcoming</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-value">3</div>
          <div className="stat-label">Medical Records</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👨‍⚕️</div>
          <div className="stat-value">{doctors.length}</div>
          <div className="stat-label">Available Doctors</div>
        </div>
      </div>

      <div className="panel">
        <h2>Next Appointment</h2>
        {upcoming ? (
          <div className="upcoming-card">
            <div className="upcoming-main">
              <p><strong>Doctor:</strong> {upcoming.doctor}</p>
              <p><strong>Department:</strong> {upcoming.department}</p>
              <p><strong>Date:</strong> {upcoming.date} at {upcoming.time}</p>
              <p><strong>Status:</strong> <span className="badge badge-success">{upcoming.status}</span></p>
            </div>
            {upcomingDoctor && (
              <img src={upcomingDoctor.image} alt={upcomingDoctor.name} className="upcoming-doc-img" />
            )}
          </div>
        ) : (
          <p className="empty-state">
            No appointments yet.{' '}
            <Link to="/appointment" style={{ color: 'var(--primary)', fontWeight: 600 }}>Book one now →</Link>
          </p>
        )}
      </div>

      <div className="panel">
        <h2>Quick Actions</h2>
        <div className="quick-actions">
          <Link to="/appointment" className="quick-action">📅 Book Appointment</Link>
          <Link to="/portal/patient/appointments" className="quick-action">📋 View Appointments</Link>
          <Link to="/portal/patient/doctors" className="quick-action">👨‍⚕️ Browse Doctors</Link>
          <Link to="/portal/patient/records" className="quick-action">🗂️ Medical Records</Link>
        </div>
      </div>
    </section>
  )
}

export default PatientDashboard
