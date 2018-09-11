'use strict';

const RemoveConnectionUseCaseBuilder = require('../../../../src/domain/di/use-cases/remove-connection-builder');

describe('RemoveConnection Entity Builder', () => {
  test('RemoveConnection Entity', () => {
    expect(RemoveConnectionUseCaseBuilder).toEqual({
      userActionsEntity: expect.anything(),
    });
  });
});
