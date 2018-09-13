'use strict';

const ResponseAdapterBuilder = require('../../../../src/domain/di/adapters/response-adapter-builder');

describe('Response Adapter Builder', () => {
  test('Response Adapter', () => {
    expect(ResponseAdapterBuilder).toEqual({
      accountResponse: expect.anything(),
      authResponse: expect.anything(),
    });
  });
});
