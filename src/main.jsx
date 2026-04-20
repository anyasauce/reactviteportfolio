import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const Analytics = import.meta.env.PROD 
  ? (await import('@vercel/analytics/react')).Analytics 
  : () => null;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {import.meta.env.PROD && <Analytics />}
  </React.StrictMode>,
)