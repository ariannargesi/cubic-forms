import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider  from './Context'

import './styles.css'
import './responsive.css'
ReactDOM.render(
  <StoreProvider>
    <App/>
   </StoreProvider>
  ,
  document.getElementById('root')
);

