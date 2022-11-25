import React from 'react';
import PublicPage from '../pages/Public';
import HomePage from '../pages/Home';
import CrearTareaPage from '../pages/CrearTareaPage';
import ConsultarTareaPage from '../pages/ConsultarTareaPage';
import AboutPage from '../pages/About';
import RegistroPage from '../pages/Registro';

const MainRoutes = [
  {
    path: '/',
    element: <PublicPage />,
  },
  {
    path: 'home',
    element: <HomePage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'registro',
    element: <RegistroPage />,
  },{
    path: 'crearTarea',
    element: <CrearTareaPage />,
  },{
    path: 'consultarTarea',
    element: <ConsultarTareaPage />,
  },
];

export default MainRoutes;
