import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = () => {
    return Boolean(auth)
  }

  return (
    <AuthContext.Provider value={{auth, isAuthenticated: isAuthenticated(), setAuth, loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext);
 
  return context;
 }