import {
  FORGET_PASSWORD_PENDING,
  FORGET_PASSWORD_REJECTED,
  FORGET_PASSWORD_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
  REGISTER_PENDING,
  REGISTER_REJECTED,
  REGISTER_SUCCESS,
  RESET_AUTH_STATE,
} from "../actions/types/authType";

const initialState = {
  isLoading: false,
  accessToken: null,
  error: null,
  flag: false,
};
const authReducer = (state = initialState, action) => {
  const authHandlers = {
    [LOGIN_PENDING]: () => ({ ...state, isLoading: true }),
    [FORGET_PASSWORD_PENDING]: () => ({ ...state, isLoading: true }),
    [LOGIN_SUCCESS]: () => ({
      ...state,
      isLoading: false,
      accessToken: action.payload,
    }),
    [FORGET_PASSWORD_SUCCESS]: () => ({
      ...state,
      isLoading: false,
      flag: true,
    }),
    [RESET_AUTH_STATE]: () => ({
      ...state,
      isLoading: false,
      error: null,
      flag: false,
    }),
    [FORGET_PASSWORD_REJECTED]: () => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [LOGIN_REJECTED]: () => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [REGISTER_PENDING]: () => ({ ...state, isLoading: true }),
    [REGISTER_SUCCESS]: () => ({
      ...state,
      isLoading: false,
      flag: true,
    }),
    [REGISTER_REJECTED]: () => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  };
  return authHandlers[action.type] ? authHandlers[action.type]() : state;
};

export default authReducer;
