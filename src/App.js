import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { getGlobalState } from './Context';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Notifications from './pages/Notifications';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';

const App = () => {
  const [{ isAuth }] = getGlobalState();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register">
          {
            !isAuth ?
              <Register /> :
              <Redirect to="/" />
          }
        </Route>
        <Route exact path="/login">
          {
            !isAuth ?
              <Login /> :
              <Redirect to="/" />
          }
        </Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/:category/:product" component={Products} />
        <Route exact path="/:category/:product/:id" component={Product} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
