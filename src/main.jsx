import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let Analytics = () => null;

if (import.meta.env.PROD) {
  const { Analytics: VercelAnalytics } = await import('@vercel/analytics/react');
  Analytics = VercelAnalytics;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)