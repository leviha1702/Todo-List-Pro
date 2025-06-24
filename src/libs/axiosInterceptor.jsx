import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
