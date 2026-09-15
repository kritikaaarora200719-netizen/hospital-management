import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import { getItem, setItem, STORAGE_KEYS } from '../../data/storage'
import '../PortalPages.css'

// Register a new patient - controlled form with validation + localStorage save
function RegisterPatient() {
  const initial = { name: '', age: '', gender: '', phone: '', email: '', address: '' }
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [patients, setPatients] = useState([])

  useEffect(() => {
    setPatients(getItem(STORAGE_KEYS.patients))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.age.trim()) e.age = 'Age is required'
    else if (isNaN(form.age) || Number(form.age) <= 0) e.age = 'Enter a valid age'
    if (!form.gender) e.gender = 'Select gender'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[0-9+\-\s]{10,15}$/.test(form.phone)) e.phone = 'Enter a valid phone'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.address.trim()) e.address = 'Address is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length > 0) {
      setSuccess(false)
      return
    }
    const newPatient = { id: Date.now(), ...form, registeredAt: new Date().toISOString() }
    const updated = [newPatient, ...patients]
    setItem(STORAGE_KEYS.patients, updated)
    setPatients(updated)
    setSuccess(true)
    setForm(initial)
  }

  return (
    <section>
      <h1>Register New Patient</h1>
      <p className="portal-sub">Fill in the details to register a patient</p>

      <form className="appointment-form" onSubmit={handleSubmit} noValidate>
        {success && (
          <div className="success-message">Patient registered successfully and saved!</div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input type="text" id="age" name="age" value={form.age} onChange={handleChange} />
            {errors.age && <span className="form-error">{errors.age}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <select id="gender" name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className="form-error">{errors.gender}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <textarea id="address" name="address" value={form.address} onChange={handleChange} />
          {errors.address && <span className="form-error">{errors.address}</span>}
        </div>

        <Button type="submit" variant="solid" className="form-submit">Register Patient</Button>
      </form>

      {/* Show recently registered patients */}
      {patients.length > 0 && (
        <div className="panel" style={{ marginTop: '24px' }}>
          <h2>Recently Registered ({patients.length})</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {patients.slice(0, 5).map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.age}</td>
                    <td>{p.gender}</td>
                    <td>{p.phone}</td>
                    <td>{p.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}

export default RegisterPatient
