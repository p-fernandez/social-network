'use strict';

const TokenEntityBuilder = require('../../../../src/domain/di/entities/token-entity-builder');

describe('Token Entity Builder', () => {
  test('Token Entity', () => {
    expect(TokenEntityBuilder).toEqual({
      checkUser: expect.anything(),
      generateToken: expect.anything(),
      getToken: expect.anything(),
      verifyToken: expect.anything(),
    });
  });
});
