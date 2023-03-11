import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serciceWorker from './serviceWorkerRegistration';

import { BrowserRouter } from 'react-router-dom';
import { LectureProvider } from './context/LectureContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='mdx-import-zipfile'>
      <LectureProvider>
        <App />
      </LectureProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serciceWorker.register();