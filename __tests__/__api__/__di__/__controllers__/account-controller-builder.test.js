'use strict';

const accountControllerBuilder = require('../../../../src/api/di/controllers/account-controller-builder');

describe('Account Controller Builder', () => {
  test('Ok', () => {
    expect(accountControllerBuilder).toEqual({
      loginUseCase: expect.anything(),
      registerUseCase: expect.anything(),
      responseAdapter: expect.anything(),
      login: expect.anything(),
      register: expect.anything(),
    });
  });
});
