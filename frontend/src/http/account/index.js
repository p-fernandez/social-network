import Api from '../Api';
import {
  LOGIN_URL,
  REGISTER_URL,
} from '../endpoints';

export function login(email, password) {
  return Api.post(LOGIN_URL, { email, password });
}

export function register(email, password) {
  return Api.post(REGISTER_URL, { email, password });
}

