'use strict';

const UserActionsEntityBuilder = require('../../../../src/domain/di/entities/user-actions-entity-builder');

describe('UserActions Entity Builder', () => {
  test('UserActions Entity', () => {
    expect(UserActionsEntityBuilder).toEqual({
      addUserConnection: expect.anything(),
      userPersistenceService: expect.anything(),
      removeUserConnection: expect.anything(),
    });
  });
});
