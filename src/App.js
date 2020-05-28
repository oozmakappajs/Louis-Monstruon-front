import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> 9df0e17554d5353a783b26849be9efa53e8acadf
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
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Layout>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
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
      </Layout>
=======
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/payment" component={() => <Payment finish />} />
        <Route exact path="/:category/:product" component={Products} />
        <Route exact path="/:category/:product/:id" component={Product} />
        <Route component={NotFound} />
      </Switch>
>>>>>>> 9df0e17554d5353a783b26849be9efa53e8acadf
    </BrowserRouter>
  );
};

export default App;

