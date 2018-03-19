import {CREATE_AUTHOR, CREATE_COMMENT} from "../constants/creatingConstants";

export const createComment = (newComment) => {
  return {
    type: CREATE_COMMENT,
    payload: {
      newComment,
    }
  }
};
export const createAuthor = (newAuthor) => {
  return {
    type: CREATE_AUTHOR,
    payload: newAuthor
  }
};
