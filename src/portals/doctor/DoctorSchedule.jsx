import doctors from '../../data/doctors'
import { useAuth } from '../../data/auth'
import '../PortalPages.css'

// Doctor schedule - weekly availability for the logged-in doctor
function DoctorSchedule() {
  const { session } = useAuth()
  const profile = doctors.find((d) => d.name === session.name) || doctors[0]

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <section>
      <h1>Weekly Schedule</h1>
      <p className="portal-sub">Your consultation timings for this week</p>

      <div className="panel">
        <p style={{ marginBottom: '16px' }}>
          <strong>General Availability:</strong> {profile.availability}
        </p>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Morning</th>
                <th>Afternoon</th>
                <th>Evening</th>
              </tr>
            </thead>
            <tbody>
              {weekDays.map((day) => {
                const isOff = day === 'Sunday' && !profile.availability.includes('Sun')
                const isOff2 = day === 'Saturday' && !profile.availability.includes('Sat')
                return (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{isOff || isOff2 ? '—' : '9:00 AM - 12:00 PM'}</td>
                    <td>{isOff || isOff2 ? '—' : '1:00 PM - 4:00 PM'}</td>
                    <td>{isOff || isOff2 ? '—' : 'Off'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default DoctorSchedule
