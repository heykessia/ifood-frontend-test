import React from 'react'
import { render } from '@testing-library/react'
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../../contexts/auth-context';
import { theme } from '../../assets/theme/theme'

const AllTheProviders = ({ children }) => {
  return (
    <AuthProvider>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </StylesProvider>
    </AuthProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }