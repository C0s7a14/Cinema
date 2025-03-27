import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dire from './componentes/dire.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<App />
{
  /*



  <Dire/>
  <App />
  */
}
  </StrictMode>,
)
