import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Notes from '../context/Notes.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Notes>
     <App />
  </Notes>
  </BrowserRouter>
   
 
)
