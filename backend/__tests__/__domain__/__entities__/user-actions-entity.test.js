'use strict';

const UserActionsEntity = require('../../../src/domain/di/entities/user-actions-entity-builder');

const errorMessage = 'This blew up!';

describe('User Actions Entity', () => {
  test('addUserConnection ok', () => {
    UserActionsEntity.userPersistenceService.addUserConnection = jest.fn()
      .mockResolvedValue(true);

    const res = UserActionsEntity.addUserConnection(1, 2);

    expect(res).resolves.toBe(true);
  });

  test('addUserConnection ko', () => {
    UserActionsEntity.userPersistenceService.addUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserActionsEntity.addUserConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('removeUserConnection ok', () => {
    UserActionsEntity.userPersistenceService.removeUserConnection = jest.fn()
      .mockResolvedValue(true);

    const res = UserActionsEntity.removeUserConnection(1, 2);

    expect(res).resolves.toBe(true);
  });

  test('removeUserConnection ko', () => {
    UserActionsEntity.userPersistenceService.removeUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserActionsEntity.removeUserConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
