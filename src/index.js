import React from 'react';
import ReactDOM from 'react-dom';
import "./css/body.css";
import "./css/App.css";
import "./css/header.css";
import App from './App';
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



