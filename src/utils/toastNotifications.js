import { toast, Bounce } from "react-toastify";

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  draggable: true,
  pauseOnHover: true,
  theme: "light",
  transition: Bounce,
};

export const showSuccessToast = (message) => {
  toast.success(message, toastOptions);
};

export const showErrorToast = (message) => {
  toast.error(message, toastOptions);
};
export const showCustomToast = (message) => {
  toast(message, toastOptions);
};
export const showWarningToast = (message) => {
  toast.warn(message, toastOptions);
};
