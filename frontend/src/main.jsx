import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Api from './components/Api.jsx'
// import Home from './components/Home.jsx'
// import Aboutus from './components/Aboutus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/>
    <App /> */}
    {/* <Aboutus/> */}
    <Api/>
  </StrictMode>,
)
