import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Timer from './components/Timer/Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);