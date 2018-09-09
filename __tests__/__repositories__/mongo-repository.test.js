'use strict';

const MongoRepository = require('../../api/di/repositories/mongo-repository-builder');

describe('Mongo Repository', () => {
  test('Before connecting', () => {
    const { client, dbName, url } = MongoRepository;

    expect(client).toBeNull();
    expect(dbName).toBeNull();
    expect(url).toBeNull();
  });

  test('Connect and check params', async() => {
    await MongoRepository.connect();

    const { client, dbName, url } = MongoRepository;

    const user = process.env.DB_USER;
    const password = process.env.DB_PWD;
    const host = process.env.DB_HOST;
    const envDbName = process.env.DB_NAME;
    const envUrl = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true`;

    expect(client).toBeNull();
    expect(dbName).toBe(envDbName);
    expect(url).toBe(envUrl);
  });
});
