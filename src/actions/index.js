import axios from 'axios'
import {
  ADD_USER, CHANGE_SEARCH_VALUE, GET_BOOKS_SUCCESS, GET_STORAGE, PLUS_COUNT, LOG_OUT, LOG_IN,
  GET_BOOKS_REQUEST, GET_CHARACTER_REQUEST, GET_CHARACTER_SUCCESS
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

export const updateLoginCount = (id, adder) => {
  return {
    type: PLUS_COUNT,
    payload: {
      id,
      adder
    }
  }
};

export const getAnswerFromAPI = () => dispatch => {
  dispatch({
    type:  GET_BOOKS_REQUEST,
    payload: true
  });
  axios.get('https://anapioficeandfire.com/api/books/')
    .then(response => {
      setTimeout(() => {
        dispatch({
          type: GET_BOOKS_SUCCESS,
          payload: response
        });
      }, 500);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getCharacterFromAPI = (link, bookISBN) => dispatch => {
  dispatch({
    type:  GET_CHARACTER_REQUEST,
  });
  axios.get(link)
    .then(response => {
      setTimeout(() => {
        dispatch({
          type: GET_CHARACTER_SUCCESS,
          payload: {
            response,
            bookISBN,
            id: Math.random(),
          }
        });
      }, 2000);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const logIn = (id) => dispatch => {
  dispatch({
    type: LOG_IN,
    payload:{
      id
    }
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
