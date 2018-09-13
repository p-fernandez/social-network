import {
  loginAction,
} from './actions';

import Api from '../../http/Api';

const mockUser = {
  _id: 1,
  email: 'email@email.com',
  role: 'user',
  friends: [],
};

const mockError = 'error';

describe('Login actions', () => {
  test('Login action', () => {
    Api.post = jest.fn(() => Promise.resolve({
      data: {
        ...mockUser,
      },
      status: 200,
      statusText: 'OK',
    }));

    const res = loginAction('email', 'pwd');
    expect(res).resolves.toEqual({
      data: {
        ...mockUser,
      },
      status: 200,
      statusText: 'OK',
    });
  });

  test('loginAction ko', () => {
    Api.post = jest.fn(() => Promise.resolve({
        data: {
          error: mockError,
        },
        status: 401,
        statusText: 'ERR',
      }));

    const res = loginAction('email', 'pwd');
    expect(res).resolves.toEqual({
      data: {
        error: mockError,
      },
      status: 401,
      statusText: 'ERR',
    });
  });
});
