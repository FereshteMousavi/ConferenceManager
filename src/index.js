
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppTheme from './AppTheme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppTheme app={App} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
