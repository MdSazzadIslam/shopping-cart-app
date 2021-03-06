import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import configureStore from './redux/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * PersistGate delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.
 */
const history = createBrowserHistory();

const initialState: any = {};
const store = configureStore(history, initialState);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
