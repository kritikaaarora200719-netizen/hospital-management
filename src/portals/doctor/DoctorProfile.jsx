import { useAuth } from '../../data/auth'
import doctors from '../../data/doctors'
import '../PortalPages.css'

// Doctor profile - professional details
function DoctorProfile() {
  const { session } = useAuth()
  const profile = doctors.find((d) => d.name === session.name) || doctors[0]

  return (
    <section>
      <h1>My Profile</h1>
      <p className="portal-sub">Professional information</p>
      <div className="panel">
        <div className="profile-info">
          <div className="info-item"><strong>Name</strong>{session.name}</div>
          <div className="info-item"><strong>Specialization</strong>{profile.specialization}</div>
          <div className="info-item"><strong>Department</strong>{profile.department}</div>
          <div className="info-item"><strong>Qualification</strong>{profile.qualification}</div>
          <div className="info-item"><strong>Experience</strong>{profile.experience}</div>
          <div className="info-item"><strong>Availability</strong>{profile.availability}</div>
        </div>
      </div>
    </section>
  )
}

export default DoctorProfile
