import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import styles from './App.module.scss';

import Header from './Header/Header';
import { Routes } from '../router/Routes.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.header}>
      <Header />
      </div>
      <Routes />
    </BrowserRouter>     
  )
}
export default App;