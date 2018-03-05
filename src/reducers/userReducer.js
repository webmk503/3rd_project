import {ADD_USER, GET_STORAGE, PLUS_COUNT,} from "../constants/index";

const initialState = {
  users: {},
  searchValue: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case(ADD_USER):
        return {
          ...state,
          users: {
            ...state.users,
            [action.payload.id]: {
              ...action.payload,

            },
          },
        };
      case (GET_STORAGE):
        return {
          ...state,
          users: action.payload.users
        };
      case (PLUS_COUNT):
        return {
          ...state,
          users: {
            ...state.users,
            [state.users[id]]: {
              ...state.users[id],
              numberOfLogin: state.users[id].numberOfLogin + 1,
            }
          }
        };
      default:
        return state;
    }
  }
;

export default userReducer;
