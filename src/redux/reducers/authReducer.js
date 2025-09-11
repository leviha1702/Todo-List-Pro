import {
  FORGET_PASSWORD_PENDING,
  FORGET_PASSWORD_REJECTED,
  FORGET_PASSWORD_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
  RESET_AUTH_STATE,
} from "../actions/types/authType";

const initialState = {
  isLoading: false,
  accessToken: null,
  error: null,
  flag: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_PENDING:
    case FORGET_PASSWORD_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        accessToken: payload,
      };
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flag: true,
      };
    case RESET_AUTH_STATE:
      return {
        ...state,
        isLoading: false,
        accessToken: null,
        error: null,
        flag: false,
      };
    case FORGET_PASSWORD_REJECTED:
    case LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
