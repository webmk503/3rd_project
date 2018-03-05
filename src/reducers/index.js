import {combineReducers} from 'redux';
import userReducer from './userReducer';
import bookReducer from "./bookReducer";

const reducers = combineReducers({
  userReducer,
  bookReducer,

});

export default reducers;
