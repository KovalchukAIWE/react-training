import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header/Header';
import Routes from '../router/Routes';
import Context from './Context';

const App = () => {
  return (
    <Context.Provider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Context.Provider>
  );
};
export default App;
