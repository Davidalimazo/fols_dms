import { appConfig } from '~/lib/app_config';
import httpClient, { type AxiosResponse } from 'axios';
import { ErrorHandler } from './errorHandler';

export const baseURL = 'http://127.0.0.1:8000/api/fols';

export const Axios = httpClient.create({
  baseURL,
  timeout: appConfig.httpTimeout,
  headers: {
    'Content-Type': 'application/json',
    //  "X-PLATFORM": "web",
  },
});

export const AuthAxios = httpClient.create({
  baseURL,
  timeout: appConfig.httpTimeout,
  headers: {
    'Content-Type': 'application/json',
    //  "X-PLATFORM": "web",
  },
});

const successHandler = (response: AxiosResponse) => {
  return response;
};

Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
AuthAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
AuthAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

AuthAxios.interceptors.response.use(
  (response) => successHandler(response),
  async function (error) {
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  (response) => successHandler(response),
  async function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => successHandler(response),
  async function (error) {
    return await ErrorHandler(error.response);
  }
);
AuthAxios.interceptors.response.use(
  (response) => successHandler(response),
  async function (error) {
    return await ErrorHandler(error.response);
  }
);

export default AuthAxios;
