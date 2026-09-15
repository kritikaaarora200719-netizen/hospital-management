import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../data/auth'
import Sidebar from '../../components/Sidebar'
import DoctorDashboard from './DoctorDashboard'
import DoctorAppointments from './DoctorAppointments'
import DoctorPatients from './DoctorPatients'
import DoctorSchedule from './DoctorSchedule'
import DoctorProfile from './DoctorProfile'

function DoctorPortal() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()

  if (!session || session.role !== 'Doctor') {
    return <Navigate to="/login" replace />
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const navItems = [
    { to: '/portal/doctor', label: 'Dashboard', icon: '📊', end: true },
    { to: '/portal/doctor/appointments', label: "Today's Appointments", icon: '📅' },
    { to: '/portal/doctor/patients', label: 'Patients', icon: '🧑' },
    { to: '/portal/doctor/schedule', label: 'Schedule', icon: '🗓️' },
    { to: '/portal/doctor/profile', label: 'Profile', icon: '🪪' },
  ]

  return (
    <div className="portal-layout">
      <Sidebar items={navItems} title="Doctor Panel" onLogout={handleLogout} />
      <div className="portal-main">
        <Routes>
          <Route index element={<DoctorDashboard />} />
          <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="patients" element={<DoctorPatients />} />
          <Route path="schedule" element={<DoctorSchedule />} />
          <Route path="profile" element={<DoctorProfile />} />
          <Route path="*" element={<Navigate to="/portal/doctor" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default DoctorPortal
