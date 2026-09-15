import './Pages.css'

// About page - hospital story, mission, vision, values
function About() {
  const values = [
    { icon: '❤️', title: 'Compassion', text: 'We treat every patient with empathy and respect.' },
    { icon: '✅', title: 'Integrity', text: 'Honest, ethical and transparent healthcare services.' },
    { icon: '💡', title: 'Innovation', text: 'Adopting modern technology for better outcomes.' },
    { icon: '🤝', title: 'Teamwork', text: 'Collaborative care across departments and specialties.' },
  ]

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>About MediCare Hospital</h1>
          <p>Caring for our community since 2001</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container about-grid">
          <article>
            <h2>Our Story</h2>
            <p>
              MediCare Hospital was founded in 2001 with a simple mission - to make
              quality healthcare accessible to everyone. What started as a small
              30-bed clinic has grown into a 350-bed multi-specialty hospital
              serving thousands of patients every month.
            </p>
            <p style={{ marginTop: '12px' }}>
              Today we have over 80 specialist doctors across 10 departments,
              supported by modern diagnostic facilities, advanced operation
              theatres and a dedicated team of nurses and paramedics.
            </p>
          </article>
          <aside className="about-image">
            <img
              src="https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&h=500&w=700"
              alt="Medical team at MediCare Hospital"
            />
          </aside>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <div className="mission-vision">
            <article className="mv-card">
              <h3>🎯 Our Mission</h3>
              <p>
                To deliver compassionate, high-quality and affordable healthcare
                using modern technology and a patient-first approach.
              </p>
            </article>
            <article className="mv-card">
              <h3>👁️ Our Vision</h3>
              <p>
                To be the most trusted healthcare provider in the region, known
                for clinical excellence and ethical medical practice.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do.</p>
          <div className="why-grid">
            {values.map((v) => (
              <article className="why-card" key={v.title}>
                <div className="why-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
