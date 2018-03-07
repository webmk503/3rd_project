import {
  CHANGE_SEARCH_VALUE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_CHARACTER_REQUEST, GET_CHARACTER_SUCCESS,
  GET_STORAGE
} from "../constants/index";

const initialState = {
  books: {},
  searchValue: '',
  loading: false,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_BOOKS_SUCCESS):
      return {
        ...state,
        loading: false,
        books: {
            ...action.payload.data
        },
      };

    case (GET_BOOKS_REQUEST):
      return {
        ...state,
        loading: true,
        books: {},
      };

    case (GET_CHARACTER_SUCCESS):
      return {
        ...state,
        loading: false,
      };

    case (GET_CHARACTER_REQUEST):
      return {
        ...state,
        loading: true,
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


