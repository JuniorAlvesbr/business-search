import React from 'react';
import ReactDOM from 'react-dom';
import Reset from './styles/generic/Reset';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
