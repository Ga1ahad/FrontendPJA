import './index.css';
import React, { Suspense } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, history } from './utils/storage/store';
// import Admin from './Admin/routes';
import Login from './Auth/Login';
import UpsertPassword from './Auth/UpsertPassword';
import Drawer from './User/Sidebar/Sidebar.js';
import { loggedInRoutes } from "./User/routes";


const routeArray = Object.values(loggedInRoutes);
const App = () => {
  return (
    <Provider>
      <Router history={history}>
        <Suspense fallback="loading">
          <Drawer routes={routeArray} />
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path={['/reset-password', '/register']} component={UpsertPassword} />
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
