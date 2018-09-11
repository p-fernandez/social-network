'use strict';

const UserPersistenceService = require('../../../src/domain/di/services/user-persistence-service-builder');
const mockUser = require('../../mocks/user');

const errorMessage = 'This blew up!';
const passwordHashed = 'passwordHashed';

describe('UserPersistence Service', () => {
  test('addUserConnection ok', () => {
    const serviceResponse = {
      matchedCount: 1,
      modifiedCount: 1,
    };
    UserPersistenceService.persistenceProvider.addUserConnection = jest.fn()
      .mockResolvedValue(serviceResponse);

    const res = UserPersistenceService.addUserConnection(1, 2);

    expect(res).resolves.toEqual(serviceResponse);
  });

  test('addUserConnection ko', () => {
    UserPersistenceService.persistenceProvider.addUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserPersistenceService.addUserConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('createUser ok', () => {
    const created = { _id: 1 };
    UserPersistenceService.persistenceProvider.createUser = jest.fn()
      .mockResolvedValue(created);

    const res = UserPersistenceService.createUser(mockUser.email, passwordHashed);

    expect(res).resolves.toEqual(created);
  });

  test('createUser ko', () => {
    UserPersistenceService.persistenceProvider.createUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserPersistenceService.createUser(mockUser.email, passwordHashed);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getAll ok', () => {
    const users = [];
    UserPersistenceService.persistenceProvider.getAll = jest.fn()
      .mockResolvedValue(users);

    const res = UserPersistenceService.getAll();

    expect(res).resolves.toEqual(users);
  });

  test('getAll ko', () => {
    UserPersistenceService.persistenceProvider.getAll = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserPersistenceService.getAll();

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getUser ok', () => {
    UserPersistenceService.persistenceProvider.getUser = jest.fn()
      .mockResolvedValue(mockUser);

    const res = UserPersistenceService.getUser(mockUser.email);

    expect(res).resolves.toEqual(mockUser);
  });

  test('getUser ko', () => {
    UserPersistenceService.persistenceProvider.getUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserPersistenceService.getUser(mockUser);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('removeUserConnection ok', () => {
    const serviceResponse = {
      matchedCount: 1,
      modifiedCount: 1,
    };
    UserPersistenceService.persistenceProvider.removeUserConnection = jest.fn()
      .mockResolvedValue(serviceResponse);

    const res = UserPersistenceService.removeUserConnection(1, 2);

    expect(res).resolves.toEqual(serviceResponse);
  });

  test('removeUserConnection ko', () => {
    UserPersistenceService.persistenceProvider.removeUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserPersistenceService.addUserConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('userExists ok', () => {
    UserPersistenceService.getUser = jest.fn()
      .mockResolvedValue(true);

    const res = UserPersistenceService.userExists(mockUser.email);

    expect(res).resolves.toEqual(true);
  });

  test('userExists ko', () => {
    UserPersistenceService.getUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserPersistenceService.userExists(mockUser.email);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
