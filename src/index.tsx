import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import { GlobalStyle } from './styles/globals';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);


