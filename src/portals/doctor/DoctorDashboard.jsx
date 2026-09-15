import { useState, useEffect } from 'react'
import { useAuth } from '../../data/auth'
import { getItem, STORAGE_KEYS } from '../../data/storage'
import doctors from '../../data/doctors'
import '../PortalPages.css'

// Doctor dashboard - summary stats and today's appointments
function DoctorDashboard() {
  const { session } = useAuth()
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const all = getItem(STORAGE_KEYS.appointments)
    // Show appointments assigned to this doctor (match by name)
    const mine = all.filter((a) => a.doctor === session.name)
    setAppointments(mine)
  }, [session.name])

  const myDoctorProfile = doctors.find((d) => d.name === session.name) || doctors[0]

  return (
    <section>
      <h1>Dr. {session.name}</h1>
      <p className="portal-sub">{myDoctorProfile.specialization} - {myDoctorProfile.department}</p>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-value">{appointments.length}</div>
          <div className="stat-label">Total Appointments</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-value">{appointments.filter((a) => a.status === 'Confirmed').length}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🧑</div>
          <div className="stat-value">{new Set(appointments.map((a) => a.email)).size}</div>
          <div className="stat-label">Unique Patients</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏰</div>
          <div className="stat-value">{myDoctorProfile.experience}</div>
          <div className="stat-label">Experience</div>
        </div>
      </div>

      <div className="panel">
        <h2>Recent Appointments</h2>
        {appointments.length === 0 ? (
          <p className="empty-state">No appointments assigned to you yet.</p>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.slice(0, 5).map((a) => (
                  <tr key={a.id}>
                    <td>{a.patientName}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.reason}</td>
                    <td><span className="badge badge-success">{a.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default DoctorDashboard
