import { useAuthUser } from 'hooks/useAuthUser'
import React, { createContext, useState, useContext, useEffect } from 'react'

interface AppContextType {
  isLogged: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const { token } = useAuthUser()

  useEffect(() => {
    if (token) {
      setIsLogged(true)
    }
  }, [token])

  return <AppContext.Provider value={{ isLogged }}>{children}</AppContext.Provider>
}

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a TokenProvider')
  }
  return context
}
