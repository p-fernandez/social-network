'use strict';

const RegisterUseCase = require('../../../src/domain/di/use-cases/login-builder');
const mockUser = require('../../mocks/user');

const errorMessage = 'This blew up!';

describe('Register Use Case', () => {
  test('execute OK', () => {
    RegisterUseCase.userEntity.userExists = jest.fn()
      .mockResolvedValue(false);
    RegisterUseCase.passwordEntity.getPasswordHashed = jest.fn()
      .mockResolvedValue('passwordHashed');
    RegisterUseCase.userEntity.createUser = jest.fn()
      .mockResolvedValue({ _id: 1 });

    const res = RegisterUseCase.execute(mockUser.email, 'password');

    expect(res).resolves.toEqual({ _id: 1 });
  });

  test('execute KO exists because email in use', () => {
    RegisterUseCase.userEntity.userExists = jest.fn()
      .mockResolvedValue(true);
    RegisterUseCase.passwordEntity.getPasswordHashed = jest.fn()
      .mockResolvedValue('passwordHashed');
    RegisterUseCase.userEntity.createUser = jest.fn()
      .mockResolvedValue({ _id: 1 });

    const res = RegisterUseCase.execute(mockUser.email, 'password');

    expect(res).resolves.toEqual({
      code: 409,
      message: 'Email in use',
    });
  });

  test('execute KO passwordEntity crash', () => {
    RegisterUseCase.passwordEntity.getPasswordHashed = jest.fn()
      .mockRejectedValue(new Error(errorMessage));
    RegisterUseCase.userEntity.userExists = jest.fn()
      .mockResolvedValue(false);

    const res = RegisterUseCase.execute(mockUser.email, 'password');

    return expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('execute KO userEntity crash', () => {
    RegisterUseCase.userEntity.userExists = jest.fn()
      .mockRejectedValue(new Error(errorMessage));
    RegisterUseCase.passwordEntity.getPasswordHashed = jest.fn()
      .mockResolvedValue('passwordHashed');

    const res = RegisterUseCase.execute(mockUser.email, 'password');

    return expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
