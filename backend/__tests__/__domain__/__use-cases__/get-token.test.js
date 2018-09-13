'use strict';

const GetTokenUseCase = require('../../../src/domain/di/use-cases/get-token-builder');

describe('Get Token Use Case', () => {
  test('execute OK', async() => {
    GetTokenUseCase.tokenEntity.getToken = jest.fn()
      .mockResolvedValue(true);

    const res = GetTokenUseCase.execute('digest');

    expect(res).resolves.toBe(true);
  });

  test('execute KO', async() => {
    GetTokenUseCase.tokenEntity.getToken = jest.fn()
      .mockRejectedValue(false);

    const res = GetTokenUseCase.execute('digest');

    expect(res).rejects.toBe(false);
  });
});
