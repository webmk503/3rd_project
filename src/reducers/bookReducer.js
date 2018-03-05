import {CHANGE_SEARCH_VALUE, GET_BOOKS, GET_STORAGE} from "../constants/index";

const initialState = {
  books: {},
  searchValue: ''
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_BOOKS):
      return {
        ...state,
        books: {
          ...state.books,
          [action.payload.id]: {
            ...action.payload,
          }
        },
      };

    case (CHANGE_SEARCH_VALUE):
      return {
        ...state,
        searchValue: action.payload
      };

    case (GET_STORAGE):
      return {
        ...state,
        books: action.payload.books
      };
    default:
      return state;
  }
};

export default bookReducer;


