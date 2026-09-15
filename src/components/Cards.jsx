import { Link } from 'react-router-dom'
import './Cards.css'

// Reusable card to display a department
function DepartmentCard({ department }) {
  return (
    <article className="card department-card">
      <div className="card-icon">{department.icon}</div>
      <h3>{department.name}</h3>
      <p>{department.description}</p>
      <div className="card-footer">
        <span className="badge badge-info">{department.doctors} Doctors</span>
        <Link to="/doctors" className="card-link">View Doctors →</Link>
      </div>
    </article>
  )
}

// Reusable card to display a service
function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <div className="card-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  )
}

export { DepartmentCard, ServiceCard }
