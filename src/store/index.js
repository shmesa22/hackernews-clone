import { createStore } from 'redux';
import rootReducer from 'store/reducer';
import middleware from 'store/middleware';

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, middleware);
  return store;
}

export default configureStore;
