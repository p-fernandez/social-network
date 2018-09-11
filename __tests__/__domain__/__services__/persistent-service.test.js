'use strict';

const PersistentService = require('../../../src/domain/di/services/persistent-service-builder');
const mockUser = require('../../mocks/user');

const errorMessage = 'This blew up!';
const passwordHashed = 'passwordHashed';

describe('Persistent Service', () => {
  test('addUserConnection ok', () => {
    const serviceResponse = {
      matchedCount: 1,
      modifiedCount: 1,
    };
    PersistentService.mongoService.addUserConnection = jest.fn()
      .mockResolvedValue(serviceResponse);

    const res = PersistentService.addUserConnection(1, 2);

    expect(res).resolves.toEqual(serviceResponse);
  });

  test('addUserConnection ko', () => {
    PersistentService.mongoService.addUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PersistentService.addUserConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('createUser ok', () => {
    const created = { _id: 1 };
    PersistentService.mongoService.createUser = jest.fn()
      .mockResolvedValue(created);

    const res = PersistentService.createUser(mockUser.email, passwordHashed);

    expect(res).resolves.toEqual(created);
  });

  test('createUser ko', () => {
    PersistentService.mongoService.createUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PersistentService.createUser(mockUser.email, passwordHashed);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getAll ok', () => {
    const users = [];
    PersistentService.mongoService.getAll = jest.fn()
      .mockResolvedValue(users);

    const res = PersistentService.getAll();

    expect(res).resolves.toEqual(users);
  });

  test('getAll ko', () => {
    PersistentService.mongoService.getAll = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PersistentService.getAll();

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getUser ok', () => {
    PersistentService.mongoService.getUser = jest.fn()
      .mockResolvedValue(mockUser);

    const res = PersistentService.getUser(mockUser.email);

    expect(res).resolves.toEqual(mockUser);
  });

  test('getUser ko', () => {
    PersistentService.mongoService.getUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PersistentService.getUser(mockUser);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('removeUserConnection ok', () => {
    const serviceResponse = {
      matchedCount: 1,
      modifiedCount: 1,
    };
    PersistentService.mongoService.removeUserConnection = jest.fn()
      .mockResolvedValue(serviceResponse);

    const res = PersistentService.removeUserConnection(1, 2);

    expect(res).resolves.toEqual(serviceResponse);
  });

  test('removeUserConnection ko', () => {
    PersistentService.mongoService.removeUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PersistentService.addUserConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('userExists ok', () => {
    PersistentService.getUser = jest.fn()
      .mockResolvedValue(true);

    const res = PersistentService.userExists(mockUser.email);

    expect(res).resolves.toEqual(true);
  });

  test('userExists ko', () => {
    PersistentService.getUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PersistentService.userExists(mockUser.email);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
