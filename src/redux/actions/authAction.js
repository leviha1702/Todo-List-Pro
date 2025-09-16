import { keyLocalStorage } from "../../constants/keyConstant";
import axiosInstance from "../../libs/axiosInterceptor";
import handleAsyncAction from "../../utils/handleAsyncAction";
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
  REGISTER_PENDING,
  REGISTER_REJECTED,
  REGISTER_SUCCESS,
  RESET_AUTH_STATE,
} from "./types/authType";

//Reset initialState
export const resetAuthState = () => ({
  type: RESET_AUTH_STATE,
});
//handle login
export const loginInitiate = (identify, password) =>
  handleAsyncAction(
    () =>
      axiosInstance.post("/auth/login", {
        identify,
        password,
      }),
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_REJECTED,
    (data) => {
      saveToLocalStorage(keyLocalStorage.accessToken, data.accessToken);
      showSuccessToast("Login successfully!");
      window.location.href = "/";
    }
  );

//handle forget password
export const forgetPasswordInitiate = (email) =>
  handleAsyncAction(
    () =>
      axiosInstance.post("/auth/forgot-password", {
        email,
      }),
    FORGET_PASSWORD_PENDING,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_REJECTED,
    (data) => {
      showSuccessToast("Please, new password sent to your email!");
    }
  );

export const registerInitiate = (email, password) =>
  handleAsyncAction(
    () =>
      axiosInstance.post("/auth/register", {
        email,
        password,
      }),
    REGISTER_PENDING,
    REGISTER_SUCCESS,
    REGISTER_REJECTED,
    (_) => {
      showSuccessToast("Account created successfully!");
    }
  );
