import axios from "axios";
import { getToken } from "./auth";





const api = axios.create({
    baseURL: "https://us-central1-br-ipti-visao.cloudfunctions.net/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
