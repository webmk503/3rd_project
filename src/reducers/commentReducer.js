import { CREATE_COMMENT, } from "../constants/creatingConstants";
import { GET_STORAGE, } from '../constants/main';

const initialState = {
  comments: {},
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case(CREATE_COMMENT):
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.newComment.id]: {
            ...action.payload.newComment,
          },
        },
      };

    case(GET_STORAGE):
      return{
        ...state,
        comments: {
          ...action.payload.comments
        }
      };
    default:
      return state;
  }
};

export default commentReducer;
