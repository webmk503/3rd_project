import {ADD_USER, GET_STORAGE, PLUS_COUNT,} from "../constants/main";

const initialState = {
  users: {},
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
            [action.payload.id]: {
              ...state.users[action.payload.id],
              numberOfLogin: action.payload.adder,
            }
          }
        };

      default:
        return state;
    }
  }
;

export default userReducer;
