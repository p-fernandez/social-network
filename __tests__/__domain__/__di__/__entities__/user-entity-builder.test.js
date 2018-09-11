'use strict';

const UserEntityBuilder = require('../../../../src/domain/di/entities/user-entity-builder');

describe('User Entity Builder', () => {
  test('User Entity', () => {
    expect(UserEntityBuilder).toEqual({
      createUser: expect.anything(),
      getAllUsers: expect.anything(),
      getUser: expect.anything(),
      persistentService: expect.anything(),
      userExists: expect.anything(),
    });
  });
});
