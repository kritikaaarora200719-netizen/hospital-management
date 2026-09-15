import medicalRecords from '../../data/medicalRecords'
import '../PortalPages.css'

// Patient medical records - dummy academic data displayed in a table
function PatientRecords() {
  return (
    <section>
      <h1>Medical Records</h1>
      <p className="portal-sub">Your past diagnoses and prescriptions (demo data)</p>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Doctor</th>
                <th>Diagnosis</th>
                <th>Prescription</th>
              </tr>
            </thead>
            <tbody>
              {medicalRecords.map((r) => (
                <tr key={r.id}>
                  <td>{r.date}</td>
                  <td><span className="badge badge-info">{r.type}</span></td>
                  <td>{r.doctor}</td>
                  <td>{r.diagnosis}</td>
                  <td>{r.prescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default PatientRecords
