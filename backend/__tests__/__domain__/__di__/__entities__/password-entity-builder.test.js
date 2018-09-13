'use strict';

const PasswordEntityBuilder = require('../../../../src/domain/di/entities/password-entity-builder');

describe('Password Entity Builder', () => {
  test('Password Entity', () => {
    expect(PasswordEntityBuilder).toEqual({
      compare: expect.anything(),
      getPasswordHashed: expect.anything(),
    });
  });
});
