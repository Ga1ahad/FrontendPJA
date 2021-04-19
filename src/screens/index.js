import './index.css';
import React, { Suspense, useState, useEffect } from "react";
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, history } from './utils/storage/store';
// import Admin from './Admin/routes';
import Login from './Auth/login';
import Register from './Auth/register';
import Drawer from './User/Sidebar/Sidebar.js';
import { loggedInRoutes } from "./User/Routes";

import AuthService from "./Auth/services/auth.service";

const App = () => {
  const routeArray = Object.values(loggedInRoutes);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <Provider>
      <Router history={history}>
        <Suspense fallback="loading">
          {currentUser && (
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
