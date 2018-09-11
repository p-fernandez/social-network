'use strict';

const MongoConnectorBuilder = require('../../../../../src/domain/di/infrastructure/mongo/mongo-connector-builder');

describe('Mongo Connector Builder', () => {
  test('Mongo Connector', () => {
    expect(MongoConnectorBuilder).toEqual({
      client: expect.any(Object),
      close: expect.anything(),
      connect: expect.anything(),
      dbName: expect.any(String),
      url: expect.any(String),
    });
  });
});
