import {combineReducers} from 'redux';
import userReducer from './userReducer';
import bookReducer from "./bookReducer";
import characterReducer from "./characterReducer";
import houseReducer from "./houseReducer";
import commentReducer from "./commentReducer";
import authorReducer from "./authorReducer";

const reducers = combineReducers({
  userReducer,
  bookReducer,
  characterReducer,
  houseReducer,
  commentReducer,
  authorReducer,

});

export default reducers;
