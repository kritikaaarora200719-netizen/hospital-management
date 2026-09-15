import Button from './Button'
import './DoctorCard.css'

// Reusable doctor card - shows profile image and key info
function DoctorCard({ doctor, onViewProfile, onBookAppointment }) {
  return (
    <article className="doctor-card">
      <div className="doctor-image-wrap">
        <img src={doctor.image} alt={doctor.name} loading="lazy" />
      </div>
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p className="doctor-spec">{doctor.specialization}</p>
        <span className="badge badge-info">{doctor.department}</span>
        <ul className="doctor-details">
          <li><strong>Experience:</strong> {doctor.experience}</li>
          <li><strong>Timing:</strong> {doctor.availability}</li>
        </ul>
        <div className="doctor-actions">
          <Button variant="outline" onClick={() => onViewProfile(doctor)}>View Profile</Button>
          <Button variant="solid" onClick={() => onBookAppointment(doctor)}>Book Appointment</Button>
        </div>
      </div>
    </article>
  )
}

export default DoctorCard
