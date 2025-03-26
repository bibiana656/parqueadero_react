import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import Login from './Login' */
import Header from './Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*  <Login/> */}
    <Header/>
  </StrictMode>,
)

