import React from "react";
import RouteConfiguration from "./routes";
import Routes from "./routes";

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <ConnectedRouter history={history}>
          <RouteConfiguration />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
