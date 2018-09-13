'use strict';

const { UserRouter } = require('../../../src/api/routes');

describe('User Router', () => {
  test('Routes', () => {
    const { stack } = UserRouter;

    expect(stack.length).toBe(1);

    const [route1] = stack;

    expect(route1.route.path).toBe('/');
    expect(route1.route.methods).toEqual({ get: true });
  });
});
