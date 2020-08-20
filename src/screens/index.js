import './index.css';
import React, { Suspense } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { Provider, history } from './utils/storage/store';
// import Admin from './Admin/routes';
import Login from './Auth/Login';
import UpsertPassword from './Auth/UpsertPassword';
import Wardrobe from './User/Clothes/Wardrobe.js';
import AddClothes from './User/Clothes/AddClothes.js';
import EditClothes from './User/Clothes/EditClothes.js';
import AddTrip from './User/Trip/AddTrip.js';
import Drawer from './User/Sidebar/Sidebar.js';
import ListTrip from './User/Trip/ListTrip.js';

const App = () => {
  return (
    <Provider>
      <Router history={history}>
        <Suspense fallback="loading">
          <Drawer />
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path={['/reset-password', '/register']} component={UpsertPassword} />
          <Route path="/clothes/list" component={Wardrobe} />
          <Route path="/clothes/add" component={AddClothes} />
          <Route path="/clothes/edit" component={EditClothes} />
          <Route path="/trip/add" component={AddTrip} />
          <Route path="/trip/list" component={ListTrip} />
          {/* <Route path="/admin" component={Admin} /> */}
          {/* {routes.map(renderRoute)} */}
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
