'use strict';

const GetUsersUseCaseBuilder = require('../../../../src/domain/di/use-cases/get-users-builder');

describe('GetUsers Entity Builder', () => {
  test('GetUsers Entity', () => {
    expect(GetUsersUseCaseBuilder).toEqual({
      userEntity: expect.anything(),
    });
  });
});
