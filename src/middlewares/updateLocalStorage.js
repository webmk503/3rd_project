import {updateBooks, updateUsers} from "../utils/localStorage";
import {ADD_USER, GET_BOOKS} from "../constants/index";


const updater = (store) => (next) => (action) => {

  if (action.type === ADD_USER) {
    updateUsers(action.payload);
  } else if (action.type === GET_BOOKS) {
    updateBooks(action.payload);
  }
  next(action);

};

export default updater;
