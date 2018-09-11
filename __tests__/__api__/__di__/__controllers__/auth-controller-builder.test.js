'use strict';

const authControllerBuilder = require('../../../../src/api/di/controllers/auth-controller-builder');

describe('Auth Controller Builder', () => {
  test('Ok', () => {
    expect(authControllerBuilder).toEqual({
      getTokenUseCase: expect.anything(),
      responseAdapter: expect.anything(),
      getToken: expect.anything(),
    });
  });
});
