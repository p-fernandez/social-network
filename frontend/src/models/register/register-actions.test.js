import {
  registerAction,
} from './actions';

import Api from '../../http/Api';

const mockUser = {
  _id: 1,
};

const mockError = 'error';

describe('Register actions', () => {
  test('Register action', () => {
    Api.post = jest.fn(() => Promise.resolve({
      data: {
        ...mockUser,
      },
      status: 200,
      statusText: 'OK',
    }));

    const res = registerAction('email', 'pwd');
    expect(res).resolves.toEqual({
      data: {
        ...mockUser,
      },
      status: 200,
      statusText: 'OK',
    });
  });

  test('registerAction ko email in use', () => {
    Api.post = jest.fn(() => Promise.resolve({
        data: {
          error: mockError,
        },
        status: 409,
        statusText: 'ERR',
      }));

    const res = registerAction('email', 'pwd');
    expect(res).resolves.toEqual({
      data: {
        error: mockError,
      },
      status: 409,
      statusText: 'ERR',
    });
  });
});
