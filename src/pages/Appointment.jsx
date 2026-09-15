import { useLocation } from 'react-router-dom'
import AppointmentForm from '../components/AppointmentForm'
import './Pages.css'

// Appointment page - wraps the reusable AppointmentForm component
function Appointment() {
  const location = useLocation()
  const passedState = location.state || {}
  const preselectedDoctor = passedState.doctorName
    ? { name: passedState.doctorName }
    : null
  const preselectedDepartment = passedState.department || ''

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Book an Appointment</h1>
          <p>Schedule a visit with our specialist doctors</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <AppointmentForm
            preselectedDoctor={preselectedDoctor}
            preselectedDepartment={preselectedDepartment}
          />
        </div>
      </section>
    </main>
  )
}

export default Appointment
