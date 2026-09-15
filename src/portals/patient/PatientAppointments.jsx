import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../data/auth'
import { getItem, setItem, STORAGE_KEYS } from '../../data/storage'
import '../PortalPages.css'

// Patient appointments - view and cancel saved appointments
function PatientAppointments() {
  const { session } = useAuth()
  const [appointments, setAppointments] = useState([])

  // Load appointments from localStorage on mount
  useEffect(() => {
    const all = getItem(STORAGE_KEYS.appointments)
    const mine = all.filter((a) => a.email === session.email)
    setAppointments(mine)
  }, [session.email])

  const handleCancel = (id) => {
    const all = getItem(STORAGE_KEYS.appointments)
    const updated = all.map((a) =>
      a.id === id ? { ...a, status: 'Cancelled' } : a
    )
    setItem(STORAGE_KEYS.appointments, updated)
    setAppointments(updated.filter((a) => a.email === session.email))
  }

  return (
    <section>
      <h1>My Appointments</h1>
      <p className="portal-sub">View and manage your booked appointments</p>

      <div className="panel">
        {appointments.length === 0 ? (
          <p className="empty-state">
            No appointments yet.{' '}
            <Link to="/appointment" style={{ color: 'var(--primary)', fontWeight: 600 }}>Book one now →</Link>
          </p>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.doctor}</td>
                    <td>{a.department}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.reason}</td>
                    <td>
                      <span className={`badge ${a.status === 'Confirmed' ? 'badge-success' : 'badge-error'}`}>
                        {a.status}
                      </span>
                    </td>
                    <td>
                      {a.status === 'Confirmed' && (
                        <button className="btn-cancel" onClick={() => handleCancel(a.id)}>
                          Cancel
                        </button>
                      )}
                    </td>
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

export default PatientAppointments
