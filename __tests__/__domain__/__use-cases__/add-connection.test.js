'use strict';

const AddConnectionUseCase = require('../../../src/domain/di/use-cases/add-connection-builder');

const errorMessage = 'This blew up!';

describe('Add Connection Use Case', () => {
  test('addConnection OK', () => {
    AddConnectionUseCase.userActionsEntity.addUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 1,
        modifiedCount: 1,
      });

    const res = AddConnectionUseCase.execute(1, 2);

    expect(res).resolves.not.toBeDefined();
  });

  test('addConnection KO matched but not modified', () => {
    AddConnectionUseCase.userActionsEntity.addUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 1,
        modifiedCount: 0,
      });

    const res = AddConnectionUseCase.execute(1, 2);

    expect(res).resolves.toEqual({
      code: 202,
      message: 'Could not add connection',
    });
  });

  test('addConnection KO not matched', () => {
    AddConnectionUseCase.userActionsEntity.addUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 0,
        modifiedCount: 0,
      });

    const res = AddConnectionUseCase.execute(1, 2);

    expect(res).resolves.toEqual({
      code: 404,
      message: 'Could not add connection',
    });
  });

  test('addConnection KO mongo service crashes', () => {
    AddConnectionUseCase.userActionsEntity.addUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = AddConnectionUseCase.execute(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
