import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './config';

const Routes = () => {
  return (
    <Switch>
      {routes.map((el) => {
        if (el.path === '/') {
          return (
            <Route path={el.path} exact>
              <Redirect to="/Bg" />
            </Route>
          );
        }
        return <Route key={el.exact} path={el.path} component={el.component} />;
      })}
    </Switch>
  );
};

export default Routes;
