import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './Routers/AppRouters';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style/card.css'
import './style/menu.css'
import './style/viveres.css'


ReactDOM.render(
  <React.StrictMode>
   <AppRouters/>
  </React.StrictMode>,
  document.getElementById('root')
);



