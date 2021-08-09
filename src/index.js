import React from 'react';
import ReactDOM from 'react-dom';
import "modern-normalize/modern-normalize.css";
import './scss/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


