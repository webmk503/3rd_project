import axios from 'axios';
import {
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_CHAR_REQUEST, GET_CHAR_SUCCESS, GET_CHARACTER_REQUEST,
  GET_CHARACTER_SUCCESS,
  GET_HOUSE_REQUEST, GET_HOUSE_SUCCESS, GET_HOUSES_REQUEST, GET_HOUSES_SUCCESS
} from "../constants/apiConstants";

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
      throw new Error(error);
    });
};

export const APIgetBook = (bookId, id) => dispatch => {
  dispatch({
    type:  GET_BOOK_REQUEST,
    payload: true
  });
  axios.get(`https://anapioficeandfire.com/api/books/${bookId}`)
    .then(response => {
      setTimeout(() => {
        dispatch({
          type: GET_BOOK_SUCCESS,
          payload: {
            response,
            id
          }
        });
      }, 500);
    })
    .catch(function (error) {
      throw new Error(error);
    });
};
export const APIgetChar = (charId, id) => dispatch => {
  dispatch({
    type:  GET_CHAR_REQUEST,
    payload: true
  });
  axios.get(`https://anapioficeandfire.com/api/characters/${charId}`)
    .then(response => {
      setTimeout(() => {
        dispatch({
          type: GET_CHAR_SUCCESS,
          payload: {
            response,
            id,
            charId,
          }
        });
      }, 200);
    })
    .catch(function (error) {
      throw new Error(error);
    });
};

export const getCharacterFromAPI = (link, bookID) => dispatch => {
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
            bookID,
            id: Math.random(),
          }
        });
      }, 500);
    })
    .catch(function (error) {
      throw new Error(error);
    });
};

export const getHouseFromAPI = (link, id) => dispatch => {
  dispatch({
    type:  GET_HOUSE_REQUEST,
  });
  axios.get(link)
    .then(response => {
      setTimeout(() => {
        dispatch({
          type: GET_HOUSE_SUCCESS,
          payload: {
            response,
            id,
          }
        });
      }, 500);
    })
    .catch(function (error) {
      throw new Error(error);
    });
};
export const APIgetAllHouses = () => dispatch => {
  dispatch({
    type:  GET_HOUSES_REQUEST,
  });
  axios.get('https://anapioficeandfire.com/api/houses/')
    .then(response => {
      setTimeout(() => {
        dispatch({
          type: GET_HOUSES_SUCCESS,
          payload: {
            response,
          }
        });
      }, 500);
    })
    .catch(function (error) {
      throw new Error(error);
    });
};
