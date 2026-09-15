import { useState, useEffect } from 'react'
import { getItem, STORAGE_KEYS } from '../../data/storage'
import '../PortalPages.css'

// Receptionist - search registered patients by name, phone or email
function SearchPatient() {
  const [allPatients, setAllPatients] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    setAllPatients(getItem(STORAGE_KEYS.patients))
  }, [])

  // filter() across multiple fields
  const results = query.trim()
    ? allPatients.filter((p) => {
        const q = query.toLowerCase()
        return (
          p.name.toLowerCase().includes(q) ||
          p.phone.includes(query) ||
          p.email.toLowerCase().includes(q)
        )
      })
    : allPatients

  return (
    <section>
      <h1>Search Patient</h1>
      <p className="portal-sub">Find a patient by name, phone or email</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search by name, phone or email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="panel">
        {results.length === 0 ? (
          <p className="empty-state">
            {allPatients.length === 0
              ? 'No patients registered yet.'
              : 'No patients match your search.'}
          </p>
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
                </tr>
              </thead>
              <tbody>
                {results.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.age}</td>
                    <td>{p.gender}</td>
                    <td>{p.phone}</td>
                    <td>{p.email}</td>
                    <td>{p.address}</td>
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

export default SearchPatient
