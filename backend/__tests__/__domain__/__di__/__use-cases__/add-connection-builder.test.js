'use strict';

const AddConnectionUseCaseBuilder = require('../../../../src/domain/di/use-cases/add-connection-builder');

describe('AddConnection Entity Builder', () => {
  test('AddConnection Entity', () => {
    expect(AddConnectionUseCaseBuilder).toEqual({
      userActionsEntity: expect.anything(),
    });
  });
});
