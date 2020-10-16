import React from 'react';
import { render } from '../../utils/testUtils/theme-provider-util';
import { AuthProvider } from '../../contexts/auth-context';

export const renderAuthProvider = ({ children, auth }) => {
  return render (
    <AuthProvider value={auth}>
        {children}
    </AuthProvider>
  )
}