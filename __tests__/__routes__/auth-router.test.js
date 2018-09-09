'use strict';

const { AuthRouter } = require('../../api/routes');

describe('Auth Router', () => {
  test('Routes', () => {
    const { stack } = AuthRouter;

    expect(stack.length).toBe(3);

    const [route1, route2, route3] = stack;

    expect(route1.route.path).toBe('/login');
    expect(route1.route.methods).toEqual({ post: true });

    expect(route2.route.path).toBe('/register');
    expect(route2.route.methods).toEqual({ post: true });

    expect(route3.route.path).toBe('/token');
    expect(route3.route.methods).toEqual({ post: true });
  });
});
