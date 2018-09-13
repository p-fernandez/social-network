'use strict';

const GetTokenUseCaseBuilder = require('../../../../src/domain/di/use-cases/get-token-builder');

describe('GetToken Entity Builder', () => {
  test('GetToken Entity', () => {
    expect(GetTokenUseCaseBuilder).toEqual({
      tokenEntity: expect.anything(),
    });
  });
});
