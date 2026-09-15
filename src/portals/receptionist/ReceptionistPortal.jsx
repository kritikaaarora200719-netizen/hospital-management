import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../data/auth'
import Sidebar from '../../components/Sidebar'
import ReceptionistDashboard from './ReceptionistDashboard'
import RegisterPatient from './RegisterPatient'
import ReceptionistPatients from './ReceptionistPatients'
import ReceptionistAppointments from './ReceptionistAppointments'
import SearchPatient from './SearchPatient'

function ReceptionistPortal() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()

  if (!session || session.role !== 'Receptionist') {
    return <Navigate to="/login" replace />
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const navItems = [
    { to: '/portal/receptionist', label: 'Dashboard', icon: '📊', end: true },
    { to: '/portal/receptionist/register', label: 'Register Patient', icon: '➕' },
    { to: '/portal/receptionist/patients', label: 'Patients', icon: '🧑' },
    { to: '/portal/receptionist/appointments', label: 'Appointments', icon: '📅' },
    { to: '/portal/receptionist/search', label: 'Search Patient', icon: '🔍' },
  ]

  return (
    <div className="portal-layout">
      <Sidebar items={navItems} title="Reception Panel" onLogout={handleLogout} />
      <div className="portal-main">
        <Routes>
          <Route index element={<ReceptionistDashboard />} />
          <Route path="register" element={<RegisterPatient />} />
          <Route path="patients" element={<ReceptionistPatients />} />
          <Route path="appointments" element={<ReceptionistAppointments />} />
          <Route path="search" element={<SearchPatient />} />
          <Route path="*" element={<Navigate to="/portal/receptionist" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default ReceptionistPortal
