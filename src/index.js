import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkProvider } from './context/darkContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DarkProvider>
    <App />
    </DarkProvider>
  </React.StrictMode>
);

