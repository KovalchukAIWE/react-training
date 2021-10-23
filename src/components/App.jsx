import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Routes from '../router/Routes';
import Context from './Context';

function App() {
  // const value = {
  //   newArray,
  // };
  return (
    <Context.Provider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
