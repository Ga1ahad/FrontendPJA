import './index.css';
import React, { Suspense } from "react";
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, history } from './utils/storage/store';
// import Admin from './Admin/routes';
import Login from './Auth/login';
import Register from './Auth/register';
import Drawer from './User/Sidebar/Sidebar.js';
import { loggedInRoutes } from "./User/Routes";

import authService from "./Auth/services/auth.service";

const App = () => {
  const isLoggedIn = authService.isLoggedIn();
  var routeArray = [];
  routeArray = Object.values(loggedInRoutes);
  return (
    <Provider>
      <Router history={history}>
        <Suspense fallback="loading">
          {isLoggedIn && (
            <Drawer routes={routeArray} />
          )}
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Switch>
            {routeArray.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  component={prop.component}
                  key={key}
                  exact={prop.exact || false}
                />
              );
            })}
          </Switch>
          {/* <Route path="/admin" component={Admin} /> */}
          {/* {routes.map(renderRoute)} */}
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
