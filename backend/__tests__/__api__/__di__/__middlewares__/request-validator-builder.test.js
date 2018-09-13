'use strict';

const requestValidatorBuilder = require('../../../../src/api/di/middlewares/request-validator-builder');

describe('Request Validator Builder', () => {
  test('Ok', () => {
    expect(requestValidatorBuilder).toEqual({
      checkErrors: expect.anything(),
    });
  });
});
