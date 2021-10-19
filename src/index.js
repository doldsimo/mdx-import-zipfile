import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serciceWorker from './serviceWorkerRegistration';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serciceWorker.register();