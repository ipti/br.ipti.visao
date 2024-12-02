import axios from "axios";
import { getToken } from "./auth";





const api = axios.create({
  //   baseURL: "http://127.0.0.1:5001/br-ipti-visao/us-central1/"
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
