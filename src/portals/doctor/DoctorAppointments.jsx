import { useState, useEffect } from 'react'
import { useAuth } from '../../data/auth'
import { getItem, setItem, STORAGE_KEYS } from '../../data/storage'
import '../PortalPages.css'

// Doctor appointments - view and update status of assigned appointments
function DoctorAppointments() {
  const { session } = useAuth()
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const all = getItem(STORAGE_KEYS.appointments)
    setAppointments(all.filter((a) => a.doctor === session.name))
  }, [session.name])

  const updateStatus = (id, status) => {
    const all = getItem(STORAGE_KEYS.appointments)
    const updated = all.map((a) => (a.id === id ? { ...a, status } : a))
    setItem(STORAGE_KEYS.appointments, updated)
    setAppointments(updated.filter((a) => a.doctor === session.name))
  }

  return (
    <section>
      <h1>Today&apos;s Appointments</h1>
      <p className="portal-sub">Manage appointment statuses for your patients</p>

      <div className="panel">
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
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.patientName}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.reason}</td>
                    <td>
                      <span className={`badge ${
                        a.status === 'Confirmed' ? 'badge-success' :
                        a.status === 'Completed' ? 'badge-info' :
                        a.status === 'Cancelled' ? 'badge-error' : 'badge-warning'
                      }`}>{a.status}</span>
                    </td>
                    <td>
                      <select
                        value={a.status}
                        onChange={(e) => updateStatus(a.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
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

export default DoctorAppointments
