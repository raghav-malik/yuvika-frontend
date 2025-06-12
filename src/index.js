import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Debug API URL issues
console.log('Application starting...');
console.log('Current origin:', window.location.origin);
console.log('Backend URL hardcoded to: https://raghavbackend.onrender.com');

// Override fetch to log all API calls
const originalFetch = window.fetch;
window.fetch = function(url, options) {
  console.log(`Fetch request to: ${url}`, options);
  return originalFetch(url, options).then(response => {
    console.log(`Fetch response from: ${url}`, response);
    return response;
  }).catch(error => {
    console.error(`Fetch error for: ${url}`, error);
    throw error;
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
