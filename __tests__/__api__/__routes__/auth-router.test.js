'use strict';

const { AuthRouter } = require('../../../src/api/routes');

describe('Auth Router', () => {
  test('Routes', () => {
    const { stack } = AuthRouter;

    expect(stack.length).toBe(1);

    const [route1] = stack;


    expect(route1.route.path).toBe('/token');
    expect(route1.route.methods).toEqual({ post: true });
  });
});
