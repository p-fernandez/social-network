'use strict';

const mockNext = error => error;
const mockRequest = {
  body: {
    email: 'email@email.com',
    password: 'password',
  },
  headers: {
    authorization: 'AUTH',
  },
};
const mockResponse = {
  status: value => ({
    value,
    json: json => json,
  }),
};

module.exports = {
  mockNext,
  mockRequest,
  mockResponse,
};
