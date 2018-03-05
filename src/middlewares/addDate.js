import {ADD_USER,} from "../constants/index";


const addDate = (store) => (next) => (action) => {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  if (action.type === ADD_USER) {
    action.payload.createdAt = new Date().toLocaleString('ru', options);
  }

  next(action);

};

export default addDate;
