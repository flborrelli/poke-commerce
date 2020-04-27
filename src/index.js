import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import ThemeProvider from "./context/Theme";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

