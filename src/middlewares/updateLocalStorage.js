import {countOfLogIn, logOut, updateBooks, updateUsers} from "../utils/localStorage";
import {ADD_USER, GET_BOOKS, LOG_OUT, PLUS_COUNT} from "../constants/index";


const updater = (store) => (next) => (action) => {

  if (action.type === ADD_USER) {
    updateUsers(action.payload);
  } else if (action.type === GET_BOOKS) {
    updateBooks(action.payload);
  } else if (action.type === LOG_OUT) {
    logOut();
  } else if (action.type === PLUS_COUNT) {
    countOfLogIn(action.payload);
  }
  next(action);

};

export default updater;
