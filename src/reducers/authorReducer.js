import { CREATE_AUTHOR, } from "../constants/creatingConstants";
import { GET_STORAGE, } from '../constants/main';


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
