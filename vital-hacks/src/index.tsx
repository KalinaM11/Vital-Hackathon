import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap';
document.head.appendChild(link);


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
