import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "../pages/Products";

/** The routing configuration for the application using react-router */
const RouteConfiguration: React.FC = () => (
  <Switch>
    <Router>
      <Route exact path="/" component={Products}>
        {/*  <Route path="/recipes" component={RecipesPage} />
      <Route path="/about" component={AboutPage} /> */}
      </Route>
    </Router>
  </Switch>
);

export default RouteConfiguration;
