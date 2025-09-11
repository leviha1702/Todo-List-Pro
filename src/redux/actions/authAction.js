import { keyLocalStorage } from "../../constants/keyConstant";
import axiosInstance from "../../libs/axiosInterceptor";
import { saveToLocalStorage } from "../../utils/localStorage";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utils/toastNotifications";
import {
  FORGET_PASSWORD_PENDING,
  FORGET_PASSWORD_REJECTED,
  FORGET_PASSWORD_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
  RESET_AUTH_STATE,
} from "./types/authType";

//* 1.Login
const loginPending = () => ({
  type: LOGIN_PENDING,
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginRejected = (error) => ({
  type: LOGIN_REJECTED,
  payload: error,
});

//* 2. Forget password

const forgetPasswordPending = () => ({
  type: FORGET_PASSWORD_PENDING,
});

const forgetPasswordSuccess = (payload) => ({
  type: FORGET_PASSWORD_SUCCESS,
  payload,
});

const forgetPasswordRejected = (error) => ({
  type: FORGET_PASSWORD_REJECTED,
  payload: error,
});
//Reset initialState
export const resetAuthState = () => ({
  type: RESET_AUTH_STATE,
});
//handle login
export const loginInitiate = (identify, password) => {
  return (dispatch) => {
    dispatch(loginPending());

    axiosInstance
      .post("/auth/login", {
        identify,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          saveToLocalStorage(
            keyLocalStorage.accessToken,
            response.data.accessToken
          );

          dispatch(loginSuccess(response.data.accessToken));
          window.location.href = "/";
          return showSuccessToast("Login successfully!");
        }
      })
      .catch((error) => {
        dispatch(loginRejected(error.response.data));

        return showErrorToast(error.response.data);
      });
  };
};

//handle forget password
export const forgetPasswordInitiate = (email) => {
  return (dispatch) => {
    dispatch(forgetPasswordPending());

    axiosInstance
      .post("/auth/forgot-password", {
        email,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(forgetPasswordSuccess(response.data));
          return showSuccessToast("Please, new password sent to your email!");
        }
      })
      .catch((error) => {
        dispatch(forgetPasswordRejected(error.response.data));
        return showErrorToast(error.response.data.message);
      });
  };
};
