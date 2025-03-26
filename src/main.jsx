import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LateralNav from './LateralNav'
// import Login from './Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LateralNav/>
    {/* <Login/> */}
  </StrictMode>,
)
