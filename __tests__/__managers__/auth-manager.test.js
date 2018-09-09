'use strict';

const AuthManager = require('../../api/di/managers/auth-manager-builder');
const mockUser = require('../mocks/user');

const errorMessage = 'This blew up!';

describe('Auth Manager', () => {
  test('getToken OK', async() => {
    AuthManager.tokenManager.getToken = jest.fn()
      .mockReturnValue(Promise.resolve({ authorization: 'AUTH' }));
    const { authorization } = await AuthManager.getToken('SECRET');

    expect(authorization).toBe('AUTH');
  });

  test('getToken KO because wrong secret', async() => {
    AuthManager.tokenManager.getToken = jest.fn()
      .mockReturnValue(Promise.resolve({
        code: 403,
        message: 'Unauthorized',
      }));
    const { code, message } = await AuthManager.getToken('WRONG SECRET');

    expect(code).toBe(403);
    expect(message).toBe('Unauthorized');
  });

  test('getToken KO because unexpected error', () => {
    AuthManager.tokenManager.getToken = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = AuthManager.getToken('WRONG SECRET');

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('login OK', () => {
    AuthManager.userManager.getUser = jest.fn()
      .mockResolvedValue(mockUser);
    AuthManager.passwordManager.compare = jest.fn()
      .mockResolvedValue(true);

    const password = 'password';
    const res = AuthManager.login(mockUser.email, password);

    expect(res).resolves.toEqual(mockUser);
  });

  test('login KO wrong password', () => {
    AuthManager.userManager.getUser = jest.fn()
      .mockResolvedValue(mockUser);
    AuthManager.passwordManager.compare = jest.fn()
      .mockResolvedValue(false);

    const password = 'wrong password';
    const res = AuthManager.login(mockUser.email, password);

    expect(res).resolves.toEqual({
      code: 403,
      message: 'Invalid password',
    });
  });

  test('login KO wrong email', () => {
    AuthManager.userManager.getUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const email = 'Wrong email';
    const password = 'password';
    const res = AuthManager.login(email, password);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('login KO password manager crash', () => {
    AuthManager.userManager.getUser = jest.fn()
      .mockResolvedValue(mockUser);
    AuthManager.passwordManager.compare = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const password = 'password';
    const res = AuthManager.login(mockUser.email, password);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('register OK', async() => {
    AuthManager.userManager.userExists = jest.fn()
      .mockImplementation(() => Promise.resolve(false));
    AuthManager.passwordManager.getPasswordHashed = jest.fn()
      .mockImplementation(() => Promise.resolve('passwordHashed'));
    AuthManager.userManager.createUser = jest.fn()
      .mockImplementation(() => Promise.resolve(mockUser));

    const password = 'password';
    const res = await AuthManager.register(mockUser.email, password);

    expect(res).toEqual(mockUser);
  });

  test('register KO exists because email in use', () => {
    AuthManager.userManager.userExists = jest.fn()
      .mockResolvedValue(true);

    const password = 'password';
    const res = AuthManager.register(mockUser.email, password);

    expect(res).resolves.toEqual({
      code: 409,
      message: 'Email in use',
    });
  });

  test('register KO user manager crash', () => {
    AuthManager.userManager.userExists = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const password = 'password';
    const res = AuthManager.register(mockUser.email, password);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('register KO password manager crash', () => {
    AuthManager.userManager.userExists = jest.fn()
      .mockResolvedValue(false);
    AuthManager.passwordManager.getPasswordHashed = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const password = 'password';
    const res = AuthManager.register(mockUser.email, password);

    return expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('register KO user manager crash 2', () => {
    AuthManager.userManager.userExists = jest.fn()
      .mockResolvedValue(false);
    AuthManager.passwordManager.getPasswordHashed = jest.fn()
      .mockResolvedValue('passwordHashed');
    AuthManager.userManager.createUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const password = 'password';
    const res = AuthManager.register(mockUser.email, password);

    return expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
