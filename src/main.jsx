import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);