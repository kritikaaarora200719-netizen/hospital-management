import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getItem, STORAGE_KEYS } from '../../data/storage'
import '../PortalPages.css'

// Receptionist dashboard - overview of registered patients and appointments
function ReceptionistDashboard() {
  const [patients, setPatients] = useState([])
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    setPatients(getItem(STORAGE_KEYS.patients))
    setAppointments(getItem(STORAGE_KEYS.appointments))
  }, [])

  return (
    <section>
      <h1>Reception Desk</h1>
      <p className="portal-sub">Front-desk overview and quick actions</p>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon">🧑</div>
          <div className="stat-value">{patients.length}</div>
          <div className="stat-label">Registered Patients</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-value">{appointments.length}</div>
          <div className="stat-label">Appointments</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-value">{appointments.filter((a) => a.status === 'Confirmed').length}</div>
          <div className="stat-label">Confirmed</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏥</div>
          <div className="stat-value">10</div>
          <div className="stat-label">Departments</div>
        </div>
      </div>

      <div className="panel">
        <h2>Quick Actions</h2>
        <div className="quick-actions">
          <Link to="/portal/receptionist/register" className="quick-action">➕ Register New Patient</Link>
          <Link to="/portal/receptionist/patients" className="quick-action">🧑 View All Patients</Link>
          <Link to="/portal/receptionist/search" className="quick-action">🔍 Search Patient</Link>
          <Link to="/portal/receptionist/appointments" className="quick-action">📅 All Appointments</Link>
        </div>
      </div>
    </section>
  )
}

export default ReceptionistDashboard
