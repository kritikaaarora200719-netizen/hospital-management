import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DoctorCard from '../components/DoctorCard'
import doctors from '../data/doctors'
import departments from '../data/departments'
import './Pages.css'

// Doctors page - search by name + filter by department, renders cards using map()
function Doctors() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  // filter() + includes() demonstration
  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment =
      selectedDepartment === '' || doc.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  const handleViewProfile = (doctor) => setSelectedDoctor(doctor)
  const handleBookAppointment = (doctor) => {
    navigate('/appointment', { state: { doctorName: doctor.name, department: doctor.department } })
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Find a Doctor</h1>
          <p>Search and book an appointment with our specialists</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          {/* Search and filter controls */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="🔍 Search by doctor name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">All Departments</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.name}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          {filteredDoctors.length === 0 ? (
            <p className="empty-state">No doctors found matching your search.</p>
          ) : (
            <div className="grid-3">
              {filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onViewProfile={handleViewProfile}
                  onBookAppointment={handleBookAppointment}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Doctor profile modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDoctor(null)}>×</button>
            <img src={selectedDoctor.image} alt={selectedDoctor.name} />
            <div className="modal-body">
              <h3>{selectedDoctor.name}</h3>
              <p className="modal-sub">{selectedDoctor.specialization}</p>
              <ul>
                <li><strong>Department:</strong> {selectedDoctor.department}</li>
                <li><strong>Qualification:</strong> {selectedDoctor.qualification}</li>
                <li><strong>Experience:</strong> {selectedDoctor.experience}</li>
                <li><strong>Availability:</strong> {selectedDoctor.availability}</li>
              </ul>
              <button className="btn btn-solid" style={{ width: '100%' }} onClick={() => handleBookAppointment(selectedDoctor)}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Doctors
