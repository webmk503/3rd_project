import { GET_CHAR_REQUEST, GET_CHAR_SUCCESS, GET_CHARACTER_SUCCESS,} from "../constants/index";

const initialState = {
  characters: {},
  loading: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case(GET_CHARACTER_SUCCESS):
        return {
          ...state,
          characters: {
            ...state.characters,
            [action.payload.bookID]: {
              ...state.characters[action.payload.bookID],
              [action.payload.response.data.name]: {
                ...action.payload.response,
              }
            },
          }
        };
      case (GET_CHAR_SUCCESS):
        return {
          ...state,
          loading: false,
          characters: {
            [action.payload.id]:{
              ...state.characters[action.payload.id],
              [action.payload.response.data.name]:{
                ...action.payload.response,
              }
            },
          },
        };
      case (GET_CHAR_REQUEST):
        return {
          ...state,
          loading: true,
        };


      default:
        return state;
    }
  }
;

export default userReducer;
