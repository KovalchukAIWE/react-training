import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './router/Routes';
import Provider from './components/Provider';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
