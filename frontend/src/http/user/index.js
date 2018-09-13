import Api from '../Api';
import {
  USER_ADD_CONNECTION_URL,
  USER_GET_ALL_URL,
  USER_REMOVE_CONNECTION_URL,
} from '../endpoints';

export function addConnection(userId, requestedId) {
  const firstChange = USER_ADD_CONNECTION_URL.replace(':userId', userId);
  const url = firstChange.replace(':requestedId', requestedId);
  return Api.post(url);
}

export function getUsers() {
  return Api.get(USER_GET_ALL_URL);
}

export function removeConnection(userId, requestedId) {
  const firstChange = USER_REMOVE_CONNECTION_URL.replace(':userId', userId);
  const url = firstChange.replace(':requestedId', requestedId);
  return Api.delete(url);
}

