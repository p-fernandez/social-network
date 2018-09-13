'use strict';

const userActionsControllerBuilder = require('../../../../src/api/di/controllers/user-actions-controller-builder');

describe('User Actions Controller Builder', () => {
  test('Ok', () => {
    expect(userActionsControllerBuilder).toEqual({
      addConnectionUseCase: expect.anything(),
      removeConnectionUseCase: expect.anything(),
      addConnection: expect.anything(),
      removeConnection: expect.anything(),
    });
  });
});
