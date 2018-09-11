'use strict';

const mongoRepository = require('../../../../src/domain/di/infrastructure/mongo/mongo-connector-builder');

const user = process.env.DB_USER;
const password = process.env.DB_PWD;
const host = process.env.DB_HOST;
const envDbName = process.env.DB_NAME;
const envUrl = `mongodb+srv://${user}:${password}@${host}/${envDbName}?retryWrites=true`;

describe('Mongo Repository', () => {
  test('Before connecting', () => {
    const { client, dbName, url } = mongoRepository;

    expect(client).toBeNull();
    expect(dbName).toBe(envDbName);
    expect(url).toBe(envUrl);
  });

  test('Connect and check params', () => {
    mongoRepository.connect = jest.fn()
      .mockResolvedValue(true);

    const res = mongoRepository.connect();

    const { dbName, url } = mongoRepository;

    expect(dbName).toBe(envDbName);
    expect(url).toBe(envUrl);

    expect(res).resolves.toBe(true);
  });

  test('Connect KO', () => {
    mongoRepository.connect = jest.fn()
      .mockResolvedValue(false);

    const res = mongoRepository.connect();

    expect(res).resolves.toBe(false);
  });

  test('Close', async() => {
    mongoRepository.close = jest.fn()
      .mockResolvedValue(true);

    const res = mongoRepository.close();

    expect(res).resolves.toBe(true);
  });
});
