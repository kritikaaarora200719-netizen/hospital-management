import { useAuth } from '../../data/auth'
import '../PortalPages.css'

// Patient profile - shows the logged-in patient's details
function PatientProfile() {
  const { session } = useAuth()
  return (
    <section>
      <h1>My Profile</h1>
      <p className="portal-sub">Your personal and contact information</p>
      <div className="panel">
        <div className="profile-info">
          <div className="info-item">
            <strong>Name</strong>
            {session.name}
          </div>
          <div className="info-item">
            <strong>Email</strong>
            {session.email}
          </div>
          <div className="info-item">
            <strong>Role</strong>
            {session.role}
          </div>
          <div className="info-item">
            <strong>Patient ID</strong>
            MED-{(session.email.charCodeAt(0) % 9000) + 1000}
          </div>
          <div className="info-item">
            <strong>Member Since</strong>
            {new Date(session.loginAt).toLocaleDateString()}
          </div>
          <div className="info-item">
            <strong>Blood Group</strong>
            O+ (demo)
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientProfile
