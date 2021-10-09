import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserHistory } from "history";
import configureStore from "./redux/configureStore";
const history = createBrowserHistory();
const initialState: any = {};
const store = configureStore(history, initialState);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App store={store} history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
