'use strict';

const TokenEntity = require('../../../src/domain/di/entities/token-entity-builder');
const regex = require('../../mocks/token-regex');

const { CLIENT_KEY } = process.env;

describe('Token Entity', () => {
  test('checkUser OK', async() => {
    const digest = Buffer.from(`${CLIENT_KEY}:1`).toString('base64');
    const { authorization } = await TokenEntity.getToken(digest);
    const res = await TokenEntity.checkUser(authorization, '1');

    expect(res).toBe(true);
  });

  test('checkUser KO', async() => {
    const digest = Buffer.from('INVENT:1').toString('base64');
    const { authorization } = await TokenEntity.getToken(digest);
    const res = await TokenEntity.checkUser(authorization, '1');

    expect(res).toBe(false);
  });

  test('checkUser KO 2', async() => {
    const digest = Buffer.from('INVENT:2').toString('base64');
    const { authorization } = await TokenEntity.getToken(digest);
    const res = await TokenEntity.checkUser(authorization, '1');

    expect(res).toBe(false);
  });

  test('generateToken OK', () => {
    const res = TokenEntity.generateToken(1);

    expect(res).toMatch(regex);
  });

  test('getToken OK', async() => {
    const digest = Buffer.from(`${CLIENT_KEY}:1`).toString('base64');
    const res = await TokenEntity.getToken(digest);

    const { authorization } = res;
    expect(authorization).toMatch(regex);
  });

  test('getToken KO', async() => {
    const res = await TokenEntity.getToken('INVENT');

    const {
      code,
      message,
    } = res;

    expect(code).toBe(401);
    expect(message).toBe('Unauthorized');
  });

  test('verifyToken OK', async() => {
    const digest = TokenEntity.generateToken(null);
    const res = await TokenEntity.verifyToken(digest);

    expect(res).toBe(true);
  });

  test('verifyToken KO', async() => {
    const res = await TokenEntity.verifyToken('INVENT');

    expect(res).toBe(false);
  });
});
