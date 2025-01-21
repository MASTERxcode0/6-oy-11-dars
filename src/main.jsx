import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
