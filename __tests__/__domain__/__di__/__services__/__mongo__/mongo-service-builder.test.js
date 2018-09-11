'use strict';

const MongoServiceBuilder = require('../../../../../src/domain/di/services/mongo/mongo-service-builder');

describe('Mongo Service Builder', () => {
  test('Mongo Service', () => {
    expect(MongoServiceBuilder).toEqual({
      addUserConnection: expect.anything(),
      createUser: expect.anything(),
      getAll: expect.anything(),
      getUser: expect.anything(),
      mongoRepository: expect.anything(),
      removeUserConnection: expect.anything(),
      updateOne: expect.anything(),
    });
  });
});
