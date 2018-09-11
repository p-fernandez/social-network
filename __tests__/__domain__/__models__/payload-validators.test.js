'use strict';

const { loginPayload, registerPayload } = require('../../../src/domain/models/payload-validators');

describe('Param Validators', () => {
  test('loginPayload', () => {
    expect(loginPayload.length).toBe(2);
  });

  test('registerPayload', () => {
    expect(registerPayload.length).toBe(2);
  });
});
