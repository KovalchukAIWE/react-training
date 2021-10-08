import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header/Header';
import Routes from '../router/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};
export default App;
