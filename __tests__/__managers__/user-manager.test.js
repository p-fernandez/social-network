'use strict';

const UserManager = require('../../api/di/managers/user-manager-builder');
const mockUser = require('../mocks/user');

const errorMessage = 'This blew up!';

describe('User Manager', () => {
  test('addConnection OK', () => {
    UserManager.mongoService.addUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 1,
        modifiedCount: 1,
      });

    const res = UserManager.addConnection(1, 2);

    expect(res).resolves.not.toBeDefined();
  });

  test('addConnection KO matched but not modified', () => {
    UserManager.mongoService.addUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 1,
        modifiedCount: 0,
      });

    const res = UserManager.addConnection(1, 2);

    expect(res).resolves.toEqual({
      code: 202,
      message: 'Could not update connection',
    });
  });

  test('addConnection KO not matched', () => {
    UserManager.mongoService.addUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 0,
        modifiedCount: 0,
      });

    const res = UserManager.addConnection(1, 2);

    expect(res).resolves.toEqual({
      code: 404,
      message: 'Could not update connection',
    });
  });

  test('addConnection KO mongo service crashes', () => {
    UserManager.mongoService.addUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserManager.addConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('createUser OK', () => {
    UserManager.mongoService.createUser = jest.fn()
      .mockResolvedValue({ _id: 1 });

    const res = UserManager.createUser(mockUser.email, 'password');

    expect(res).resolves.toEqual({ _id: 1 });
  });

  test('createUser KO mongo service crashes', () => {
    UserManager.mongoService.createUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserManager.createUser(mockUser.email, 'password');

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getAllUsers OK', () => {
    const userList = [{
      _id: 1,
      email: 'email1@email.com',
    }, {
      _id: 2,
      email: 'email2@email.com',
    }];

    UserManager.mongoService.getAll = jest.fn()
      .mockResolvedValue(userList);

    const res = UserManager.getAllUsers();

    expect(res).resolves.toEqual({ users: userList });
  });

  test('getAll KO mongo service crashes', () => {
    UserManager.mongoService.getAll = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserManager.getAllUsers();

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getUser OK', () => {
    UserManager.mongoService.getUser = jest.fn()
      .mockResolvedValue(mockUser);

    const res = UserManager.getUser(mockUser.email);

    expect(res).resolves.toEqual(mockUser);
  });

  test('getUser KO mongo service crashes', () => {
    UserManager.mongoService.getUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserManager.getUser(mockUser.email);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('removeConnection OK', () => {
    UserManager.mongoService.removeUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 1,
        modifiedCount: 1,
      });

    const res = UserManager.removeConnection(1, 2);

    expect(res).resolves.not.toBeDefined();
  });

  test('removeConnection KO matched but not modified', () => {
    UserManager.mongoService.removeUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 1,
        modifiedCount: 0,
      });

    const res = UserManager.removeConnection(1, 2);

    expect(res).resolves.toEqual({
      code: 202,
      message: 'Could not remove connection',
    });
  });

  test('removeConnection KO not matched', () => {
    UserManager.mongoService.removeUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 0,
        modifiedCount: 0,
      });

    const res = UserManager.removeConnection(1, 2);

    expect(res).resolves.toEqual({
      code: 404,
      message: 'Could not remove connection',
    });
  });

  test('removeConnection KO mongo service crashes', () => {
    UserManager.mongoService.removeUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserManager.removeConnection(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('userExists OK', () => {
    UserManager.mongoService.userExists = jest.fn()
      .mockResolvedValue(true);

    const res = UserManager.userExists(mockUser.email);

    expect(res).resolves.toEqual(true);
  });

  test('userExists KO mongo service crashes', () => {
    UserManager.mongoService.userExists = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = UserManager.userExists(mockUser.email);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
