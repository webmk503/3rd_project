import {GET_HOUSE_REQUEST, GET_HOUSE_SUCCESS, GET_HOUSES_REQUEST, GET_HOUSES_SUCCESS} from "../constants/index";

const initialState = {
  houses: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case(GET_HOUSE_SUCCESS):
        return {
          ...state,
          loading: false,
          houses: {
              ...action.payload.response.data,
          },
        };
      case (GET_HOUSE_REQUEST):
        return {
          ...state,
          loading: true,
        };
      case(GET_HOUSES_SUCCESS):
        return {
          ...state,
          loading: false,
          houses: {
            ...action.payload.response.data,
          },
        };
      case (GET_HOUSES_REQUEST):
        return {
          ...state,
          loading: true,
          houses: {},
        };
      default:
        return state;
    }
  }
;

export default userReducer;
