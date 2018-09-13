import {
  addConnectionAction,
  getUsersAction,
  removeConnectionAction,
} from './actions';

import Api from '../../http/Api';

const mockError = 'error';

describe('User actions', () => {
  test('Add connection action', () => {
    Api.post = jest.fn(() => Promise.resolve({
      data: {},
      status: 204,
      statusText: 'OK',
    }));

    const res = addConnectionAction(1, 2);
    expect(res).resolves.toEqual({
      data: {},
      status: 204,
      statusText: 'OK',
    });
  });

  test('addConnectionAction ko', () => {
    Api.post = jest.fn(() => Promise.resolve({
        data: {
          error: mockError,
        },
        status: 202,
        statusText: 'ERR',
      }));

    const res = addConnectionAction(1, 2);
    expect(res).resolves.toEqual({
      data: {
        error: mockError,
      },
      status: 202,
      statusText: 'ERR',
    });
  });

  test('Get users action', () => {
    Api.get = jest.fn(() => Promise.resolve({
      data: {
        users: [],
      },
      status: 200,
      statusText: 'OK',
    }));

    const res = getUsersAction();
    expect(res).resolves.toEqual({
      data: {
        users: [],
      },
      status: 200,
      statusText: 'OK',
    });
  });

  test('Get users action ko', () => {
    Api.get = jest.fn(() => Promise.resolve({
      data: {
        error: mockError,
      },
      status: 401,
      statusText: 'ERR',
    }));

    const res = getUsersAction();
    expect(res).resolves.toEqual({
      data: {
        error: mockError,
      },
      status: 401,
      statusText: 'ERR',
    });
  });

  test('Remove connection action', () => {
    Api.delete = jest.fn(() => Promise.resolve({
      data: {},
      status: 204,
      statusText: 'OK',
    }));

    const res = removeConnectionAction(1, 2);
    expect(res).resolves.toEqual({
      data: {},
      status: 204,
      statusText: 'OK',
    });
  });

  test('removeConnectionAction ko', () => {
    Api.post = jest.fn(() => Promise.resolve({
        data: {
          error: mockError,
        },
        status: 202,
        statusText: 'ERR',
      }));

    const res = removeConnectionAction(1, 2);
    expect(res).resolves.toEqual({
      data: {
        error: mockError,
      },
      status: 202,
      statusText: 'ERR',
    });
  });
});
