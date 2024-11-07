import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AxiosProvider from './controller/AxiosProvider.jsx'

createRoot(document.getElementById('root')).render(
 
  
  <StrictMode>
    <AxiosProvider>
    <App />
    </AxiosProvider>
  </StrictMode>
  
)
