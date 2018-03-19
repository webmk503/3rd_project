import {ADD_USER, } from "../constants/main";
import {updateUsers} from "../utils/localStorage";


const updater = (store) => (next) => (action) => {

  if (action.type === ADD_USER) {
    updateUsers(action.payload);
  }
  next(action);

};

export default updater;
