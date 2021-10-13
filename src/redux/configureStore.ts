import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { ApplicationState, createRootReducer } from './createRootReducer';
import logger from 'redux-logger';

// export store singleton instance
export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(routerMiddleware(history), thunk, logger)
  );
  return store;
}
