import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
      return console.log("Token expired, refreshing...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
