'use strict';

const { UserActionsRouter } = require('../../../src/api/routes');

describe('UserActions Router', () => {
  test('Routes', () => {
    const { stack } = UserActionsRouter;

    expect(stack.length).toBe(2);

    const [route1, route2] = stack;

    expect(route1.route.path).toBe('/:userId/add/:requestedId');
    expect(route1.route.methods).toEqual({ post: true });

    expect(route2.route.path).toBe('/:userId/remove/:requestedId');
    expect(route2.route.methods).toEqual({ delete: true });
  });
});
