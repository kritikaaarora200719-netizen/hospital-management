import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { DepartmentCard, ServiceCard } from '../components/Cards'
import DoctorCard from '../components/DoctorCard'
import departments from '../data/departments'
import services from '../data/services'
import doctors from '../data/doctors'
import testimonials from '../data/testimonials'
import './Home.css'

// Home page - hero, emergency, stats, why-choose, departments, services, doctors, testimonials, CTA
function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const navigate = useNavigate()

  // Show doctor profile modal
  const handleViewProfile = (doctor) => setSelectedDoctor(doctor)
  // Navigate to appointment page with the selected doctor pre-filled
  const handleBookAppointment = (doctor) => {
    navigate('/appointment', { state: { doctorName: doctor.name, department: doctor.department } })
  }

  const featuredDoctors = doctors.slice(0, 4)
  const featuredDepartments = departments.slice(0, 6)
  const featuredServices = services.slice(0, 6)

  return (
    <main>
      {/* Hero section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Compassionate Care.<br />Advanced Healthcare.</h1>
          <p>
            MediCare Hospital brings together expert doctors, modern technology
            and a patient-first approach to deliver quality healthcare for every
            member of your family - 24 hours a day, 7 days a week.
          </p>
          <div className="hero-buttons">
            <Button to="/appointment" variant="solid">Book Appointment</Button>
            <Button to="/doctors" variant="outline">Find a Doctor</Button>
          </div>
        </div>
      </section>

      {/* Emergency care banner */}
      <section className="emergency-banner">
        <div className="container">
          <div>
            <span className="em-icon">🚑</span>
          </div>
          <div>
            <h3>24x7 Emergency & Trauma Care</h3>
            <p>Rapid response team, ambulances and ICU always ready.</p>
          </div>
          <div className="em-phone">Call: 1066</div>
        </div>
      </section>

      {/* Hospital statistics */}
      <section className="page-section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-block">
              <div className="stat-number">25+</div>
              <div className="stat-text">Years of Service</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">80+</div>
              <div className="stat-text">Expert Doctors</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">50,000+</div>
              <div className="stat-text">Patients Treated</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">10</div>
              <div className="stat-text">Departments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose MediCare */}
      <section className="page-section">
        <div className="container">
          <h2 className="section-title">Why Choose MediCare?</h2>
          <p className="section-subtitle">
            We are committed to providing healthcare that is accessible, affordable and compassionate.
          </p>
          <div className="why-grid">
            <article className="why-card">
              <div className="why-icon">👨‍⚕️</div>
              <h3>Expert Doctors</h3>
              <p>Highly qualified specialists with years of clinical experience.</p>
            </article>
            <article className="why-card">
              <div className="why-icon">🏥</div>
              <h3>Modern Facilities</h3>
              <p>Advanced diagnostic and surgical equipment for accurate treatment.</p>
            </article>
            <article className="why-card">
              <div className="why-icon">⏰</div>
              <h3>24x7 Availability</h3>
              <p>Round-the-clock emergency, pharmacy and ICU support.</p>
            </article>
            <article className="why-card">
              <div className="why-icon">💰</div>
              <h3>Affordable Care</h3>
              <p>Transparent pricing and insurance support for every patient.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured departments */}
      <section className="page-section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div className="section-head">
            <h2>Our Departments</h2>
            <a href="/departments">View All →</a>
          </div>
          <div className="grid-3">
            {featuredDepartments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="page-section">
        <div className="container">
          <div className="section-head">
            <h2>Our Services</h2>
            <a href="/services">View All →</a>
          </div>
          <div className="grid-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured doctors */}
      <section className="page-section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div className="section-head">
            <h2>Featured Doctors</h2>
            <a href="/doctors">View All →</a>
          </div>
          <div className="doctor-grid">
            {featuredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onViewProfile={handleViewProfile}
                onBookAppointment={handleBookAppointment}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Patient testimonials */}
      <section className="page-section">
        <div className="container">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">Real experiences shared by our patients and their families.</p>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <article className="testimonial-card" key={t.id}>
                <div className="stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                <p className="message">&ldquo;{t.message}&rdquo;</p>
                <p className="author">{t.name}</p>
                <p className="author-role">{t.treatment}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section">
        <div className="container">
          <h2>Your Health Is Our Priority</h2>
          <p>Book an appointment with our specialists today and experience caring healthcare.</p>
          <Button to="/appointment" variant="solid">Book an Appointment</Button>
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
              <Button variant="solid" onClick={() => handleBookAppointment(selectedDoctor)}>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
