import './index.css';
import React, { Suspense } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { Provider, history } from './utils/storage/store';
import { routes } from './utils/helpers/routing';

// import Admin from './Admin/routes';
import Login from './Auth/Login';
import UpsertPassword from './Auth/UpsertPassword';
import Wardrobe from './User/Clothes/list.js';
import AddClothes from './User/Clothes/add.js';
import EditClothes from './User/Clothes/edit.js';
import AddTrip from './User/Trip/add.js'
import Trip from './User/Trip/list.js'

const renderRoute = route => <Route key={route.path} {...route} />;

const App = () => {
  return (
    <Provider>
       <Router history={history}>
          <Suspense fallback="loading">
            <Route path="/" exact render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route path={["/reset-password", "/register"]} component={UpsertPassword} />
            <Route path="/clothes/list" component={Wardrobe} />
            <Route path="/clothes/add" component={AddClothes} />
            <Route path="/clothes/edit" component={EditClothes} />
            <Route path="/trip/add" component={AddTrip} />
            <Route path="/trip/list" component={Trip} />
            {/* <Route path="/admin" component={Admin} /> */}
            {/* {routes.map(renderRoute)} */}
          </Suspense>
        </Router>
    </Provider>
  );
};

export default App;
