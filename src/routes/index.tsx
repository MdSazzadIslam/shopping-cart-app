import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../components/Loader';

const Products = lazy(() => import('../pages/Products'));
const Cart = lazy(() => import('../components/Cart'));

/**
 * Route Configuration
 * @returns
 */
const RouteConfiguration: React.FC = () => (
  <Switch>
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Router>
        <Header />
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/cart" component={Cart}></Route>
      </Router>
    </Suspense>
  </Switch>
);

export default RouteConfiguration;
