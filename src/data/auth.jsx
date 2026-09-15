import { createContext, useContext, useEffect, useState } from 'react'
import { getItem, setItem, STORAGE_KEYS } from '../data/storage'

// Auth context - simple academic session stored in localStorage.
// This is NOT real authentication - it is for demonstration only.
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)

  // Load any saved session on mount using useEffect
  useEffect(() => {
    const saved = getItem(STORAGE_KEYS.session)
    // session is stored as a single object, not an array
    if (saved && saved.length > 0) {
      setSession(saved[0])
    }
  }, [])

  const login = (role, email, name) => {
    const newSession = { role, email, name, loginAt: new Date().toISOString() }
    setItem(STORAGE_KEYS.session, [newSession])
    setSession(newSession)
    return newSession
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.session)
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook so components can access the session easily
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return ctx
}
