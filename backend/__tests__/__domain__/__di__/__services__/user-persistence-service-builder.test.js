'use strict';

const UserPersistenceServiceBuilder = require('../../../../src/domain/di/services/user-persistence-service-builder');

describe('UserPersistence Service Builder', () => {
  test('UserPersistence Service', () => {
    expect(UserPersistenceServiceBuilder).toEqual({
      addUserConnection: expect.anything(),
      createUser: expect.anything(),
      getAll: expect.anything(),
      getUser: expect.anything(),
      persistenceProvider: expect.anything(),
      removeUserConnection: expect.anything(),
      userExists: expect.anything(),
    });
  });
});
