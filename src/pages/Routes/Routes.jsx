import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import config from '../../routes/config';

const Routes = () => {
  return (    
    <Switch>
      {config.map((el) => {
        if(el.path==='/') {
          return (<Route path={el.path} exact>
            <Redirect to='/bg' />
          </Route>)
        }
        return <Route path={el.path} exact component={el.component}/>
      })}
    </Switch>
  );
}

export {Routes};
