import React from 'react';
import PublicPage from '../pages/Public';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import RegistroPage from '../pages/Registro';
import CrearEtiquetaPage from '../pages/Etiqueta';

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
  },
  {
    path: 'crearEtiqueta',
    element: <CrearEtiquetaPage  />,
  },
];

export default MainRoutes;
