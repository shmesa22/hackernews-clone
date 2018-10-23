import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import DevTools from './DevTools';

const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [];
const devTools = [];

middlewareList.push(thunk);

if(!isProd) {
  middlewareList.push(createLogger());
  devTools.push(DevTools.instrument())
}

const middleware = compose(applyMiddleware(...middlewareList), ...devTools);

export default middleware;
