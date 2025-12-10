import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Notes from '../context/Notes.jsx'

createRoot(document.getElementById('root')).render(
  <Notes>
     <App />
  </Notes>
   
 
)
