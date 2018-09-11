'use strict';

const UserActionsEntity = require('../../../src/domain/di/entities/user-actions-entity-builder');

const errorMessage = 'This blew up!';

describe('User Actions Entity', () => {
  test('addUserConnection ok', () => {
    UserActionsEntity.persistentService.addUserConnection = jest.fn()
      .mockResolvedValue(true);

    const res = UserActionsEntity.addUserConnection(1, 2);

    expect(res).resolves.toBe(true);
  });

  test('addUserConnection ko', () => {
    UserActionsEntity.persistentService.addUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserActionsEntity.addUserConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('removeUserConnection ok', () => {
    UserActionsEntity.persistentService.removeUserConnection = jest.fn()
      .mockResolvedValue(true);

    const res = UserActionsEntity.removeUserConnection(1, 2);

    expect(res).resolves.toBe(true);
  });

  test('removeUserConnection ko', () => {
    UserActionsEntity.persistentService.removeUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserActionsEntity.removeUserConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
