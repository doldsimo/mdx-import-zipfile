import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serciceWorker from './serviceWorkerRegistration';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serciceWorker.register();