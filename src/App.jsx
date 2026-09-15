import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './data/auth'
import Home from './pages/Home'
import About from './pages/About'
import { Departments, Services } from './pages/Departments'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PatientPortal from './portals/patient/PatientPortal'
import DoctorPortal from './portals/doctor/DoctorPortal'
import ReceptionistPortal from './portals/receptionist/ReceptionistPortal'
import './App.css'

// Main app - routes for public pages and role-based portals
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Portals listed first so they match before the public catch-all */}
        <Route path="/portal/patient/*" element={<PatientPortal />} />
        <Route path="/portal/doctor/*" element={<DoctorPortal />} />
        <Route path="/portal/receptionist/*" element={<ReceptionistPortal />} />

        {/* Public pages share the navbar + footer layout */}
        <Route
          path="/*"
          element={
            <PublicLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/services" element={<Services />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </PublicLayout>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

// Layout wrapper for public pages - navbar on top, footer at bottom
function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="public-content">{children}</div>
      <Footer />
    </>
  )
}

export default App
