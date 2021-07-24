
import axios from 'axios';
import browserHistory from '../browser-history';
import { AppRoute } from '../const';


const BACKEND_URL = 'https://7.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  PAGE_NOT_FOUND: 404,
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    if (response.status === HttpCode.PAGE_NOT_FOUND) {
      browserHistory.push(AppRoute.NOT_FOUND);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
