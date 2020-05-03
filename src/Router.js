import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContent from './AppContent';

const Router = () => {
  return (
    <Switch>
      <Route path="/about">
        <AppContent title='about' />
      </Route>
      <Route path="/users/:id">
        <AppContent title='users' />
      </Route>
      <Route path="/">
        <AppContent title='home' />
      </Route>
    </Switch>
  );
}
export default Router;
