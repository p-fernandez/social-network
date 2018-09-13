import axios from 'axios';

import {
  responseBuilderSuccess,
  responseBuilderError,
} from './responseBuilder';

/**
 * ES6 Singleton Pattern: export default new Class()
 **/
class Api {
  constructor() {
    this.axiosInstance = axios.create({
      headers: {
        common: {
          'Content-Type': 'application/json',
        },
      },
    });
    this.axiosInstance.interceptors.response.use(
      responseBuilderSuccess,
      responseBuilderError
    );
  }

  setAuthorization(authorization) {
    if (authorization) {
      this.axiosInstance.defaults.headers.Authorization = authorization;
    } else {
      delete this.axiosInstance.defaults.headers.Authorization;
    }
  }

  initialize({ baseUrl, timeout }) {
    const token = localStorage.getItem('token');
    if (token) {
      this.setAuthorization(token);
    }
    this.axiosInstance.defaults.baseURL = baseUrl;
    this.axiosInstance.defaults.timeout = timeout;
  }

  get(url, config) {
    return this.axiosInstance.get(url, config);
  }

  delete(url, config) {
    return this.axiosInstance.delete(url, config);
  }

  post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }

  put(url, data, config) {
    return this.axiosInstance.put(url, data, config);
  }

  patch(url, data, config) {
    return this.axiosInstance.patch(url, data, config);
  }
}

export default new Api();
