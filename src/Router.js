import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Router = () => (
      <Switch>
        <Route path="/about">
          <div>
            about
          </div>
        </Route>
        <Route path="/users">
          <div>
            users
          </div>
        </Route>
        <Route path="/">
          <div>
            home
          </div>
        </Route>
      </Switch>
);

export default Router;
