'use strict';

const userControllerBuilder = require('../../../../src/api/di/controllers/user-controller-builder');

describe('User Controller Builder', () => {
  test('Ok', () => {
    expect(userControllerBuilder).toEqual({
      getUsersUseCase: expect.anything(),
      getUsers: expect.anything(),
    });
  });
});
