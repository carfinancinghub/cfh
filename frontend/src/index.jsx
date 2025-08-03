/**
 * @file index.jsx
 * @path C:\CFH\frontend\src\index.jsx
 * @author Mini Team
 * @created 2025-06-10 [0823]
 * @purpose Entry point for the React application, initializing routing and i18n.
 * @user_impact Renders the app with multi-language support for a global user base.
 * @version 1.0.0
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);