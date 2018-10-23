import { combineReducers } from 'redux';
import app from 'store/app/reducer';

const rootReducer = combineReducers({
  app,
});

export default rootReducer;
