import React from 'react';
import ReactDOM from 'react-dom';
import GetBlocks from './api/index';
import App from './components/App';
import './styles/resets.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GetBlocks />
  </React.StrictMode>,
  document.getElementById('root'),
);
