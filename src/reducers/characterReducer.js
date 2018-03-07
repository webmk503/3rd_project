import {CHANGE_SEARCH_VALUE, GET_CHARACTER_SUCCESS,} from "../constants/index";

const initialState = {
  characters: {},
  searchValue: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case(GET_CHARACTER_SUCCESS):
        return {
          ...state,
          characters: {
            ...state.characters,
            [action.payload.bookISBN]: {
              ...state.characters[action.payload.bookISBN],
              [action.payload.response.data.name]: {
                ...action.payload.response,
              }
            },
          }
        };
      case (CHANGE_SEARCH_VALUE):
        return {
          ...state,
          searchValue: action.payload
        };

      default:
        return state;
    }
  }
;

export default userReducer;
