import {CREATE_AUTHOR, GET_STORAGE, } from "../constants/index";

const initialState = {
  authors: {}
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case(CREATE_AUTHOR):
      return {
        ...state,
        authors: {
          ...state.authors,
          [action.payload.id]: {
            ...state.authors[action.payload.id],
            ...action.payload,
            commentId: [
              action.payload.commentId,
            ],
          }
        },
      };
    case(GET_STORAGE):
      return{
        ...state,
        authors: {
          ...action.payload.authors
        }
      };
    default:
      return state;
  }
};

export default authorReducer;
