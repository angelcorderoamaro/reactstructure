//Dependencias
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter  as  Router } from 'react-router-dom';
//Routes

import AppRoutes from './routes'

//assets
import './index.css';
import './components/Global/css/Header.css';

render(
  <Router>
    <AppRoutes/>
  </Router>,
  document.getElementById('root')
);

