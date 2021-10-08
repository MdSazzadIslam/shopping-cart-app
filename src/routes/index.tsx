import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../App";

/** The routing configuration for the application using react-router */
const RouteConfiguration: React.FC = () => (
  <Switch>
    <Router>
      <Route exact path="/" component={App}>
        {/*  <Route path="/recipes" component={RecipesPage} />
      <Route path="/about" component={AboutPage} /> */}
      </Route>
    </Router>
  </Switch>
);

export default RouteConfiguration;
