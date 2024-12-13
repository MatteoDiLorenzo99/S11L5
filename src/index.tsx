import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Tipizzare il "root" come un elemento di tipo "HTMLElement"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Misurazione delle performance (opzionale)
reportWebVitals(); // Puoi passare una funzione qui, ad esempio: reportWebVitals(console.log)
