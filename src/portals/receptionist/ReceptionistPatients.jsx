import { useState, useEffect } from 'react'
import { getItem, STORAGE_KEYS } from '../../data/storage'
import '../PortalPages.css'

// Receptionist - list all registered patients
function ReceptionistPatients() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    setPatients(getItem(STORAGE_KEYS.patients))
  }, [])

  return (
    <section>
      <h1>All Patients</h1>
      <p className="portal-sub">Complete list of registered patients</p>

      <div className="panel">
        {patients.length === 0 ? (
          <p className="empty-state">No patients registered yet.</p>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Registered</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.age}</td>
                    <td>{p.gender}</td>
                    <td>{p.phone}</td>
                    <td>{p.email}</td>
                    <td>{p.address}</td>
                    <td>{new Date(p.registeredAt).toLocaleDateString()}</td>
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

export default ReceptionistPatients
