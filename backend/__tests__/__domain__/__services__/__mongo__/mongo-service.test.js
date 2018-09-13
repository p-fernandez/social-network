'use strict';

const MongoService = require('../../../../src/domain/di/services/mongo/mongo-service-builder');
const mockUser = require('../../../mocks/user');

const collection = 'users';
const errorMessage = 'This blew up!';
const passwordHashed = 'passwordHashed';

describe('Mongo Service', () => {
  /**test('createUser ok', () => {
    MongoService.mongoRepository.client.db(MongoService.mongoRepository.dbName).collection('users').insertOne = jest.fn()
      .mockResolvedValue(mockUser);

    const res = MongoService.createUser(mockUser.email, passwordHashed);

    expect(res).resolves.toEqual(mockUser);
  });*/
});
