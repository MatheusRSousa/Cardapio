import axios from "axios";
import SessionService from "../services/SessionService";

const http = axios.create({ baseURL: process.env.REACT_APP_API_URL });

http.interceptors.request.use(
  async (config) => {
    if (SessionService.isLoggedIn()) {
      let token = SessionService.getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
export default http;
