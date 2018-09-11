'use strict';

const ResponseAdapter = require('../../../src/domain/di/adapters/response-adapter-builder');

describe('Response Adapter', () => {
  test('response OK default', () => {
    const data = {
      random: 1,
    };

    const res = ResponseAdapter.response(data);

    expect(res).toEqual({
      status: 200,
      payload: data,
    });
  });

  test('response OK non default', () => {
    const data = {
      random: 1,
    };

    const res = ResponseAdapter.response(data, 201);

    expect(res).toEqual({
      status: 201,
      payload: data,
    });
  });

  test('response OK for object with code and message', () => {
    const data = {
      code: 404,
      message: 'Not nice',
    };

    const res = ResponseAdapter.response(data, 201);

    const { message } = data;
    expect(res).toEqual({
      status: 404,
      payload: {
        message,
      },
    });
  });

  test('accountResponse OK default', () => {
    const data = {
      random: 1,
    };

    const res = ResponseAdapter.accountResponse(data);

    expect(res).toEqual({
      status: 200,
      payload: data,
    });
  });

  test('authResponse OK default', () => {
    const data = {
      random: 1,
    };

    const res = ResponseAdapter.authResponse(data);

    expect(res).toEqual({
      status: 200,
      payload: data,
    });
  });
});
