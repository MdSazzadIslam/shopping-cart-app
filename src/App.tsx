import React from "react";
import RouteConfiguration from "./routes";
import { Provider } from "react-redux";
import { ApplicationState } from "./redux/createRootReducer";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
        <RouteConfiguration />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
