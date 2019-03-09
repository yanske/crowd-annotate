import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
