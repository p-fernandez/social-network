'use strict';

const { UserRouter } = require('../../api/routes');

describe('User Router', () => {
  test('Routes', () => {
    const { stack } = UserRouter;

    expect(stack.length).toBe(3);

    const [route1, route2, route3] = stack;

    expect(route1.route.path).toBe('/');
    expect(route1.route.methods).toEqual({ get: true });

    expect(route2.route.path).toBe('/:userId/add/:requestedId');
    expect(route2.route.methods).toEqual({ post: true });

    expect(route3.route.path).toBe('/:userId/remove/:requestedId');
    expect(route3.route.methods).toEqual({ delete: true });
  });
});
