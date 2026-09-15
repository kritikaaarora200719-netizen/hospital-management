import { DepartmentCard, ServiceCard } from '../components/Cards'
import departments from '../data/departments'
import services from '../data/services'
import './Pages.css'

// Departments page - renders all departments from the data array using map()
function Departments() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Departments</h1>
          <p>Specialized care across 10 medical departments</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-3">
            {departments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Services page - renders all services from the data array
function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive healthcare services under one roof</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export { Departments, Services }
