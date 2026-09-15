import { NavLink } from 'react-router-dom'
import './Sidebar.css'

// Reusable sidebar for all three portals.
// onLogout is optional - when provided, a Logout button is rendered.
function Sidebar({ items, title, onLogout }) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">{title}</h3>
      <nav className="sidebar-nav">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
        {onLogout && (
          <button className="sidebar-link logout-btn" onClick={onLogout}>
            <span className="sidebar-icon">🚪</span> Logout
          </button>
        )}
      </nav>
    </aside>
  )
}

export default Sidebar
