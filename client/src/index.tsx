import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

axios.defaults.headers.common['Authorization'] =
  process.env.REACT_APP_API_AUTH_TOKEN;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
