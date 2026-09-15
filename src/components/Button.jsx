import { Link } from 'react-router-dom'

// Reusable Button component - supports link, solid and outline variants
function Button({ children, variant = 'solid', to, onClick, type = 'button', className = '' }) {
  const classes = `btn btn-${variant} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
