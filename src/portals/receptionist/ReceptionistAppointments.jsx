import { useState, useEffect } from 'react'
import { getItem, STORAGE_KEYS } from '../../data/storage'
import '../PortalPages.css'

// Receptionist - view all booked appointments
function ReceptionistAppointments() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    setAppointments(getItem(STORAGE_KEYS.appointments))
  }, [])

  return (
    <section>
      <h1>All Appointments</h1>
      <p className="portal-sub">Every appointment booked across the hospital</p>

      <div className="panel">
        {appointments.length === 0 ? (
          <p className="empty-state">No appointments booked yet.</p>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Phone</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.patientName}</td>
                    <td>{a.phone}</td>
                    <td>{a.doctor}</td>
                    <td>{a.department}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>
                      <span className={`badge ${a.status === 'Confirmed' ? 'badge-success' : 'badge-error'}`}>
                        {a.status}
                      </span>
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

export default ReceptionistAppointments
