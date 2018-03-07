import {combineReducers} from 'redux';
import userReducer from './userReducer';
import bookReducer from "./bookReducer";
import characterReducer from "./characterReducer";

const reducers = combineReducers({
  userReducer,
  bookReducer,
  characterReducer,

});

export default reducers;
