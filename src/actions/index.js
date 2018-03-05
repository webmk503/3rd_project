import {ADD_USER, CHANGE_SEARCH_VALUE, GET_BOOKS, GET_STORAGE, PLUS_COUNT} from '../constants/index';

export const createUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser,
  }
};

export const getLocalStorage = (gotUsers, gotBooks) => {
  return {
    type: GET_STORAGE,
    payload: {
      users: gotUsers,
      books: gotBooks,
    },
  }
};

export const changeSearchValue = (value) => {
  return {
    type: CHANGE_SEARCH_VALUE,
    payload: value
  }
};

export const getBooks = (book) => {
  return {
    type: GET_BOOKS,
    payload: book
  }
};

export const updateLoginCount = (id) => {
  return {
    type: PLUS_COUNT,
    payload: id

  }
};
