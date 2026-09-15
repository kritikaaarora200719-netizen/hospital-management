import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../data/auth'
import Sidebar from '../../components/Sidebar'
import PatientDashboard from './PatientDashboard'
import PatientProfile from './PatientProfile'
import PatientAppointments from './PatientAppointments'
import PatientDoctors from './PatientDoctors'
import PatientRecords from './PatientRecords'

// Patient Portal - wraps all patient sub-pages with a sidebar
function PatientPortal() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()

  // Guard: only patients can access this portal
  if (!session || session.role !== 'Patient') {
    return <Navigate to="/login" replace />
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const navItems = [
    { to: '/portal/patient', label: 'Dashboard', icon: '📊', end: true },
    { to: '/portal/patient/profile', label: 'Profile', icon: '🧑' },
    { to: '/portal/patient/appointments', label: 'My Appointments', icon: '📅' },
    { to: '/portal/patient/doctors', label: 'Doctors', icon: '👨‍⚕️' },
    { to: '/portal/patient/records', label: 'Medical Records', icon: '📋' },
  ]

  return (
    <div className="portal-layout">
      <Sidebar items={navItems} title="Patient Panel" onLogout={handleLogout} />
      <div className="portal-main">
        <Routes>
          <Route index element={<PatientDashboard />} />
          <Route path="profile" element={<PatientProfile />} />
          <Route path="appointments" element={<PatientAppointments />} />
          <Route path="doctors" element={<PatientDoctors />} />
          <Route path="records" element={<PatientRecords />} />
          <Route path="*" element={<Navigate to="/portal/patient" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default PatientPortal
