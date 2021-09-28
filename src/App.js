import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';

import BgPage from './pages/BgPage';
import OurMissionPage from './pages/OurMissionPage';
import TeamSquaresPage from './pages/TeamSquaresPage';
import CoverPrimaryPages from './pages/CoverPrimaryPage';


const App = () => {
  return (
      <>
      <Header/>
      <Switch>
          <Route exact path='/' component={BgPage}/>
          <Route exact path='/our-mission' component={OurMissionPage}/>
          <Route exact path='/team-squares' component={TeamSquaresPage}/>
          <Route exact path='/cover-primary' component={CoverPrimaryPages}/>
      </Switch>
      </>      
  )
}

export default App;


