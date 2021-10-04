import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';

import { Routes } from './pages/Routes';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes />
    </ BrowserRouter>     
  )
}
export default App;