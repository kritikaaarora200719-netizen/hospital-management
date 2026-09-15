import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DoctorCard from '../../components/DoctorCard'
import doctors from '../../data/doctors'
import departments from '../../data/departments'
import '../PortalPages.css'

// Patient portal - browse doctors (search + filter inside the portal)
function PatientDoctors() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const navigate = useNavigate()

  const filtered = doctors.filter((doc) => {
    const matchSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchDept = selectedDepartment === '' || doc.department === selectedDepartment
    return matchSearch && matchDept
  })

  return (
    <section>
      <h1>Doctors</h1>
      <p className="portal-sub">Browse our specialists and book an appointment</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search doctor or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="">All Departments</option>
          {departments.map((d) => (
            <option key={d.id} value={d.name}>{d.name}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="empty-state">No doctors found.</p>
      ) : (
        <div className="grid-3">
          {filtered.map((doc) => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onViewProfile={() => {}}
              onBookAppointment={(d) =>
                navigate('/appointment', { state: { doctorName: d.name, department: d.department } })
              }
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default PatientDoctors
