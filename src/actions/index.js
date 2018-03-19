import {
  ADD_USER, CHANGE_SEARCH_VALUE, GET_STORAGE, PLUS_COUNT, LOG_IN,
} from '../constants/index';

export const createUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser,
  }
};

export const getLocalStorage = (gotUsers, gotBooks, gotComments, gotAuthors) => dispatch => {
  dispatch({
    type: GET_STORAGE,
    payload: {
      users: gotUsers,
      books: gotBooks,
      comments: gotComments,
      authors: gotAuthors,
    },
  });
};

export const changeSearchValue = (value) => {
  return {
    type: CHANGE_SEARCH_VALUE,
    payload: value
  }
};

export const updateLoginCount = (id, adder) => {
  return {
    type: PLUS_COUNT,
    payload: {
      id,
      adder
    }
  }
};

export const logIn = (id) => dispatch => {
  dispatch({
    type: LOG_IN,
    payload:{
      id
    }
  });
};

