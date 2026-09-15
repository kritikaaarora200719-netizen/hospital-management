import { useState } from 'react'
import doctors from '../data/doctors'
import departments from '../data/departments'
import { getItem, setItem, STORAGE_KEYS } from '../data/storage'
import Button from './Button'
import './AppointmentForm.css'

// Reusable controlled appointment form.
// Props allow a doctor/department to be pre-selected (used by Doctors page & portals).
function AppointmentForm({ preselectedDoctor = null, preselectedDepartment = '' }) {
  const initial = {
    patientName: '',
    email: '',
    phone: '',
    department: preselectedDepartment,
    doctor: preselectedDoctor ? preselectedDoctor.name : '',
    date: '',
    time: '',
    reason: '',
  }

  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  // Generic onChange handler for controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // When department changes, reset the doctor field so only matching doctors show
  const handleDepartmentChange = (e) => {
    setForm((prev) => ({ ...prev, department: e.target.value, doctor: '' }))
  }

  // Filter doctors by selected department
  const filteredDoctors = form.department
    ? doctors.filter((d) => d.department === form.department)
    : doctors

  // Validate all fields before saving
  const validate = () => {
    const newErrors = {}
    if (!form.patientName.trim()) newErrors.patientName = 'Patient name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9+\-\s]{10,15}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number'
    }
    if (!form.department) newErrors.department = 'Select a department'
    if (!form.doctor) newErrors.doctor = 'Select a doctor'
    if (!form.date) newErrors.date = 'Choose a date'
    if (!form.time) newErrors.time = 'Choose a time'
    if (!form.reason.trim()) newErrors.reason = 'Please describe your reason for visit'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setSuccess(false)
      return
    }

    // Save appointment to localStorage
    const appointments = getItem(STORAGE_KEYS.appointments)
    const newAppointment = {
      id: Date.now(),
      ...form,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
    }
    setItem(STORAGE_KEYS.appointments, [newAppointment, ...appointments])
    setSuccess(true)
    setForm(initial)
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit} noValidate>
      {success && (
        <div className="success-message">
          Appointment booked successfully! You can view it in the Patient Portal after login.
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="patientName">Patient Name *</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.patientName && <span className="form-error">{errors.patientName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="department">Department *</label>
          <select
            id="department"
            name="department"
            value={form.department}
            onChange={handleDepartmentChange}
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
          {errors.department && <span className="form-error">{errors.department}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="doctor">Doctor *</label>
          <select
            id="doctor"
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
          >
            <option value="">Select Doctor</option>
            {filteredDoctors.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name} - {doc.specialization}
              </option>
            ))}
          </select>
          {errors.doctor && <span className="form-error">{errors.doctor}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
          {errors.date && <span className="form-error">{errors.date}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="time">Time *</label>
          <input
            type="time"
            id="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />
          {errors.time && <span className="form-error">{errors.time}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="reason">Reason for Visit *</label>
        <textarea
          id="reason"
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="Briefly describe your symptoms or reason for the visit"
        />
        {errors.reason && <span className="form-error">{errors.reason}</span>}
      </div>

      <Button type="submit" variant="solid" className="form-submit">Book Appointment</Button>
    </form>
  )
}

export default AppointmentForm
