'use strict';

const userRequestValidatorBuilder = require('../../../../src/api/di/middlewares/user-request-validator-builder');

describe('User Request Validator Builder', () => {
  test('Ok', () => {
    expect(userRequestValidatorBuilder).toEqual({
      tokenEntity: expect.anything(),
      checkUserAuthorization: expect.anything(),
    });
  });
});
