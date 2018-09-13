'use strict';

const { addConnectionParams, removeConnectionParams } = require('../../../src/domain/models/param-validators');

describe('Param Validators', () => {
  test('addConnectionParams', () => {
    expect(addConnectionParams.length).toBe(2);
  });

  test('removeConnectionParams', () => {
    expect(removeConnectionParams.length).toBe(2);
  });
});
