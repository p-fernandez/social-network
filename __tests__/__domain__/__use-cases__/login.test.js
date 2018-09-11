'use strict';

const LoginUseCase = require('../../../src/domain/di/use-cases/login-builder');
const mockUser = require('../../mocks/user');

const errorMessage = 'This blew up!';

describe('Login Use Case', () => {
  test('execute OK', () => {
    LoginUseCase.userEntity.getUser = jest.fn()
      .mockResolvedValue(mockUser);

    LoginUseCase.passwordEntity.compare = jest.fn()
      .mockResolvedValue(true);

    const res = LoginUseCase.execute(mockUser.email, 'password');

    const { password, ...mockUserWithoutPassword } = mockUser;
    expect(res).resolves.toEqual(mockUserWithoutPassword);
  });

  test('execute KO', () => {
    LoginUseCase.userEntity.getUser = jest.fn()
      .mockResolvedValue(mockUser);

    LoginUseCase.passwordEntity.compare = jest.fn()
      .mockResolvedValue(false);

    const res = LoginUseCase.execute(mockUser.email, 'password');

    expect(res).resolves.toEqual({
      code: 401,
      message: 'Invalid password',
    });
  });

  test('execute KO passwordEntity crash', () => {
    LoginUseCase.userEntity.getUser = jest.fn()
      .mockResolvedValue(mockUser);
    LoginUseCase.passwordEntity.compare = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = LoginUseCase.execute(mockUser.email, 'password');

    return expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('execute KO userEntity crash', () => {
    LoginUseCase.userEntity.getUser = jest.fn()
      .mockRejectedValue(new Error(errorMessage));
    LoginUseCase.passwordEntity.compare = jest.fn()
      .mockResolvedValue(true);

    const res = LoginUseCase.execute(mockUser.email, 'password');

    return expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
