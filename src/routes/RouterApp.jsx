import { Navigate } from "react-router-dom";
import FormularioRegistro from "../pages/FormularioRegistro";
import Login from "../pages/Login"; 
import Ayuda from '../pages/Ayuda';
import Politicas from '../pages/Politicas';

export let routes = [
  {
    path: '/',
    element: <Navigate to="/formularioregistro" replace />, 
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/formularioregistro',
    element: <FormularioRegistro />,
  },
   {
    path: '/ayuda',
    element: <Ayuda />,
  },
    {
    path: '/politicas',
    element: <Politicas />,
  },
  
];
