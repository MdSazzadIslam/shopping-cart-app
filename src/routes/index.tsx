import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Products from "../pages/Products";

/**
 * Route Configuration
 * @returns
 */
const RouteConfiguration: React.FC = () => (
  <Switch>
    <Router>
      <Header />
      <Route exact path="/" component={Products}></Route>
      <Route render={() => <div> page not found </div>}></Route>
    </Router>
  </Switch>
);

export default RouteConfiguration;
