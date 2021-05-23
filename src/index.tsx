import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import { GlobalStyle } from './styles/globals';
//REDUX
import { Provider as ReduxProvider } from 'react-redux'
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>

    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);


