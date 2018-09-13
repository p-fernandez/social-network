'use strict';

const authRequestValidatorBuilder = require('../../../../src/api/di/middlewares/auth-request-validator-builder');

describe('Auth Request Validator Builder', () => {
  test('Ok', () => {
    expect(authRequestValidatorBuilder).toEqual({
      tokenEntity: expect.anything(),
      checkAuthorization: expect.anything(),
    });
  });
});
