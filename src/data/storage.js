// Small helper to keep localStorage usage consistent across the app.
// Demonstrates JSON.stringify() and JSON.parse() explicitly.
export function getItem(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

// Keys used throughout the app
export const STORAGE_KEYS = {
  appointments: 'medicare_appointments',
  patients: 'medicare_patients',
  session: 'medicare_session',
}
