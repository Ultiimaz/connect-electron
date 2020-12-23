import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import {createLogger} from "redux-logger/src";
import {createBrowserHistory, createMemoryHistory} from "history";
import { routerMiddleware } from 'connected-react-router'

const logger = createLogger({
  // ...options
});
// export const history = createMemoryHistory()
const middleware = [
  logger,
  // routerMiddleware(history),
];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
