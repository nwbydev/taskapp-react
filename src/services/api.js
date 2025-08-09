import axios from "axios";

const BASE_URL = 'http://localhost:8080';

const publicApi = axios.create({
  baseURL: BASE_URL, 
});

const privateApi = axios.create({
  baseURL: BASE_URL, 
});

privateApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('jwt');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export {publicApi,privateApi};