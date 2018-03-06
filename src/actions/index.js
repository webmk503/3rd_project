import axios from 'axios'
import {
  ADD_USER, CHANGE_SEARCH_VALUE, GET_BOOKS_SUCCESS, GET_STORAGE, PLUS_COUNT, LOG_OUT, LOG_IN,
  GET_BOOKS_REQUEST
} from '../constants/index';

export const createUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser,
  }
};

export const getLocalStorage = (gotUsers, gotBooks) => dispatch => {
  dispatch({
    type: GET_STORAGE,
    payload: {
      users: gotUsers,
      books: gotBooks,
    },
  });

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
  dispatch({
    type:  GET_BOOKS_REQUEST,
    payload: true
  });
  axios.get('https://anapioficeandfire.com/api/books/')
    .then(response => {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: response
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const logOut = (id) => {
  return {
    type: LOG_OUT,
    payload: {
      id,
    }
  }
};
