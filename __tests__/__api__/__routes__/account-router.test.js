'use strict';

const { AccountRouter } = require('../../../src/api/routes');

describe('Account Router', () => {
  test('Routes', () => {
    const { stack } = AccountRouter;

    expect(stack.length).toBe(2);

    const [route1, route2] = stack;

    expect(route1.route.path).toBe('/login');
    expect(route1.route.methods).toEqual({ post: true });

    expect(route2.route.path).toBe('/register');
    expect(route2.route.methods).toEqual({ post: true });
  });
});
