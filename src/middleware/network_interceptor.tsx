import Axios, { AxiosRequestConfig } from 'axios';

export const axios = Axios.create({
  baseURL: 'https://maqe.github.io/json/',
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(message);
  }
);