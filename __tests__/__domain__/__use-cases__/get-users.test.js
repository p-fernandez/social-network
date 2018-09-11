'use strict';

const GetUsersUseCase = require('../../../src/domain/di/use-cases/get-users-builder');

describe('Get Users Use Case', () => {
  test('execute OK', async() => {
    GetUsersUseCase.userEntity.getAllUsers = jest.fn()
      .mockResolvedValue(true);

    const res = GetUsersUseCase.execute('digest');

    expect(res).resolves.toBe(true);
  });

  test('execute KO', async() => {
    GetUsersUseCase.userEntity.getAllUsers = jest.fn()
      .mockRejectedValue(false);

    const res = GetUsersUseCase.execute('digest');

    expect(res).rejects.toBe(false);
  });
});
