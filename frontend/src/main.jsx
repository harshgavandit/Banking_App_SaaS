import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Demo from './demo/Demo.jsx'
import { isPublicDemoEntry } from './demo/entry.mjs'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isPublicDemoEntry(window.location.pathname, window.location.search)
      ? <BrowserRouter><Demo /></BrowserRouter>
      : <App />}
  </StrictMode>,
)
