'use strict';

const UserEntity = require('../../../src/domain/di/entities/user-entity-builder');

const mockUser = require('../../mocks/user');

const errorMessage = 'This blew up!';

const passwordHashed = 'passwordHashed';

describe('User Entity', () => {
  test('createUser ok', () => {
    const created = { _id: 1 };
    UserEntity.persistentService.createUser = jest.fn()
      .mockResolvedValue(created);

    const res = UserEntity.createUser(mockUser.email, passwordHashed);

    expect(res).resolves.toEqual(created);
  });

  test('createUser ko', () => {
    UserEntity.persistentService.createUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserEntity.createUser(mockUser.email, passwordHashed);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getAllUsers ok', () => {
    const users = [];
    UserEntity.persistentService.getAll = jest.fn()
      .mockResolvedValue(users);

    const res = UserEntity.getAllUsers();

    expect(res).resolves.toEqual({ users });
  });

  test('getAllUsers ko', () => {
    UserEntity.persistentService.getAll = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserEntity.getAllUsers();

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getUser ok', () => {
    UserEntity.persistentService.getUser = jest.fn()
      .mockResolvedValue(mockUser);

    const res = UserEntity.getUser(mockUser.email);

    expect(res).resolves.toEqual(mockUser);
  });

  test('getUser ko', () => {
    UserEntity.persistentService.getUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserEntity.getUser(mockUser);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('userExists ok', () => {
    UserEntity.persistentService.userExists = jest.fn()
      .mockResolvedValue(true);

    const res = UserEntity.userExists(mockUser.email);

    expect(res).resolves.toEqual(true);
  });

  test('userExists ko', () => {
    UserEntity.persistentService.userExists = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserEntity.userExists(mockUser.email);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
