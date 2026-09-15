import { useState, useEffect } from 'react'
import { useAuth } from '../../data/auth'
import { getItem, STORAGE_KEYS } from '../../data/storage'
import '../PortalPages.css'

// Doctor patients - list of unique patients from this doctor's appointments
function DoctorPatients() {
  const { session } = useAuth()
  const [patients, setPatients] = useState([])

  useEffect(() => {
    const all = getItem(STORAGE_KEYS.appointments)
    const mine = all.filter((a) => a.doctor === session.name)
    // Use a Map keyed by email to get unique patients
    const unique = new Map()
    mine.forEach((a) => {
      if (!unique.has(a.email)) {
        unique.set(a.email, {
          name: a.patientName,
          email: a.email,
          phone: a.phone,
          lastVisit: a.date,
          reason: a.reason,
        })
      }
    })
    setPatients([...unique.values()])
  }, [session.name])

  return (
    <section>
      <h1>My Patients</h1>
      <p className="portal-sub">Patients who have booked appointments with you</p>

      <div className="panel">
        {patients.length === 0 ? (
          <p className="empty-state">No patients yet.</p>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Last Visit</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p) => (
                  <tr key={p.email}>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>{p.phone}</td>
                    <td>{p.lastVisit}</td>
                    <td>{p.reason}</td>
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

export default DoctorPatients
