'use strict';

const RemoveConnectionUseCase = require('../../../src/domain/di/use-cases/remove-connection-builder');

const errorMessage = 'This blew up!';

describe('Remove Connection Use Case', () => {
  test('removeConnection OK', () => {
    RemoveConnectionUseCase.userActionsEntity.removeUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 1,
        modifiedCount: 1,
      });

    const res = RemoveConnectionUseCase.execute(1, 2);

    expect(res).resolves.not.toBeDefined();
  });

  test('removeConnection KO matched but not modified', () => {
    RemoveConnectionUseCase.userActionsEntity.removeUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 1,
        modifiedCount: 0,
      });

    const res = RemoveConnectionUseCase.execute(1, 2);

    expect(res).resolves.toEqual({
      code: 202,
      message: 'Could not remove connection',
    });
  });

  test('removeConnection KO not matched', () => {
    RemoveConnectionUseCase.userActionsEntity.removeUserConnection = jest.fn()
      .mockResolvedValue({
        matchedCount: 0,
        modifiedCount: 0,
      });

    const res = RemoveConnectionUseCase.execute(1, 2);

    expect(res).resolves.toEqual({
      code: 404,
      message: 'Could not remove connection',
    });
  });

  test('removeConnection KO mongo service crashes', () => {
    RemoveConnectionUseCase.userActionsEntity.removeUserConnection = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = RemoveConnectionUseCase.execute(1, 2);

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
