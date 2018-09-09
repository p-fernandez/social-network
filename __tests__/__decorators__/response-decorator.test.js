'use strict';

const ResponseDecorator = require('../../api/di/decorators/response-decorator-builder');

describe('Response Decorator', () => {
  test('authResponse OK default', () => {
    const data = {
      random: 1,
    };

    const res = ResponseDecorator.authResponse(data);

    expect(res).toEqual({
      status: 200,
      payload: data,
    });
  });

  test('authResponse OK non default', () => {
    const data = {
      random: 1,
    };

    const res = ResponseDecorator.authResponse(data, 201);

    expect(res).toEqual({
      status: 201,
      payload: data,
    });
  });

  test('authResponse OK for object with code and message', () => {
    const data = {
      code: 404,
      message: 'Not nice',
    };

    const res = ResponseDecorator.authResponse(data, 201);

    const { message } = data;
    expect(res).toEqual({
      status: 404,
      payload: {
        message,
      },
    });
  });
});
