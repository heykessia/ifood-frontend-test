import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = () => {
    return Boolean(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuthenticated: isAuthenticated(),
        setAuth,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
