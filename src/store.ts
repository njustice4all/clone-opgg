import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from 'modules/rootReducer';
import { rootSaga } from 'modules/rootSaga';

export const history = createBrowserHistory();

export function configureStore(initialState = undefined) {
  const sagaMiddleware = createSagaMiddleware({
    context: { history },
  });
  const reduxRouterMiddleware = routerMiddleware(history);

  const middlewares = [reduxRouterMiddleware, sagaMiddleware];

  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
