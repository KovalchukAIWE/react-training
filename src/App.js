import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';

import BgPage from './pages/BgPage';
import BgDifferentPage from './pages/BgDifferentPage';
import BgDifferentPrimaryPage from './pages/BgDifferentPrimaryPage';
import BgDifferentLightPage from './pages/BgDifferentLightPage';
import OurMissionPage from './pages/OurMissionPage';
import TeamSquaresPage from './pages/TeamSquaresPage';
import CoverPrimaryPage from './pages/CoverPrimaryPage';
import CoverAltPage from './pages/CoverAltPage';
import CoverPage from './pages/CoverPage';
import MarketStrategyPage from './pages/MarketStrategyPage';
import CompetitivePage from './pages/CompetitivePage';
import TargetCustomerPage from './pages/TargetCustomerPage';


const App = () => {
  return (
      <>
      <Header/>
      <Switch>
          <Route exact path='/bg' component={BgPage}/>
          <Route exact path='/bg-different' component={BgDifferentPage}/>
          <Route exact path='/bg-different-primary' component={BgDifferentPrimaryPage}/>
          <Route exact path='/bg-different-light' component={BgDifferentLightPage}/>
          <Route exact path='/our-mission' component={OurMissionPage}/>
          <Route exact path='/team-squares' component={TeamSquaresPage}/>
          <Route exact path='/cover-primary' component={CoverPrimaryPage}/>
          <Route exact path='/cover-alt' component={CoverAltPage}/>
          <Route exact path='/cover' component={CoverPage}/>
          <Route exact path='/market-strategy' component={MarketStrategyPage}/>
          <Route exact path='/competitive' component={CompetitivePage}/>
          <Route exact path='/target-customer' component={TargetCustomerPage}/>
      </Switch>
      </>      
  )
}

export default App;


