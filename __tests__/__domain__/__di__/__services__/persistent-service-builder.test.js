'use strict';

const PersistentServiceBuilder = require('../../../../src/domain/di/services/persistent-service-builder');

describe('Persistent Service Builder', () => {
  test('Persistent Service', () => {
    expect(PersistentServiceBuilder).toEqual({
      addUserConnection: expect.anything(),
      createUser: expect.anything(),
      getAll: expect.anything(),
      getUser: expect.anything(),
      mongoService: expect.anything(),
      removeUserConnection: expect.anything(),
      userExists: expect.anything(),
    });
  });
});
