import jwt from 'jsonwebtoken';
import { getToken } from '../../http/auth';
import { ERROR } from '../../http/constants';

const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY;

const checkStorageHasToken = () => {
  const token = localStorage.getItem('token');
  if (decodeJwt(token)) {
    return true;
  }

  return false;
};

const decodeJwt = token => {
  return jwt.verify(token, CLIENT_KEY, (error, decoded) => {
    if (error || !decoded) {
      return null;
    }
    
    return decoded;
  });
};

const deleteTokenInStorage = () => {
  try {
    localStorage.removeItem('token');
    return true;
  } catch (error) {
    return false;
  }
};

const generateDigest = (id, role) => btoa(`${process.env.REACT_APP_CLIENT_KEY}:${id}:${role}`);

const getId = () => {
  const token = localStorage.getItem('token');
  const decoded = decodeJwt(token);
  if (decoded && decoded.iss) {
    return decoded.iss;
  }

  return 0;
};

const getTokenAction = async(digest) => {
  const response = await getToken(digest);

  const { data, statusText } = response;

  if (statusText === ERROR) {
    return null;
  }

  return data.authorization;
};

const isAdmin = () => {
  const token = localStorage.getItem('token');
  const decoded = decodeJwt(token);
  if (decoded && decoded.admin) {
    return true;
  }

  return false;
};

const saveTokenInStorage = (token) => {
  localStorage.setItem('token', token);
};

export {
  checkStorageHasToken,
  decodeJwt,
  deleteTokenInStorage,
  generateDigest,
  getId,
  getTokenAction,
  isAdmin,
  saveTokenInStorage,
};
