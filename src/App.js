import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

import Loader from './components/elements/Loader';

const Products = React.lazy(() => import('./pages/Products'));
const Product = React.lazy(() => import('./pages/Product'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
const Search = React.lazy(() => import('./pages/Search'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Payment = React.lazy(() => import('./pages/Payment'));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
