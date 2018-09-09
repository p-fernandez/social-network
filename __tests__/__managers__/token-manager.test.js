'use strict';

const TokenManager = require('../../api/di/managers/token-manager-builder');
const regex = require('../mocks/token-regex');

describe('Token Manager', () => {
  test('checkUser OK', async() => {
    const appSecret = process.env.SECRET;
    const secret = Buffer.from(`${appSecret}:1`).toString('base64');
    const { authorization } = await TokenManager.getToken(secret);
    const res = await TokenManager.checkUser(authorization, '1');

    expect(res).toBe(true);
  });

  test('checkUser KO', async() => {
    const secret = Buffer.from('INVENT:1').toString('base64');
    const { authorization } = await TokenManager.getToken(secret);
    const res = await TokenManager.checkUser(authorization, '1');

    expect(res).toBe(false);
  });

  test('checkUser KO 2', async() => {
    const secret = Buffer.from('INVENT:2').toString('base64');
    const { authorization } = await TokenManager.getToken(secret);
    const res = await TokenManager.checkUser(authorization, '1');

    expect(res).toBe(false);
  });

  test('generateToken OK', () => {
    const res = TokenManager.generateToken(1);

    expect(res).toMatch(regex);
  });

  test('getToken OK', async() => {
    const appSecret = process.env.SECRET;
    const secret = Buffer.from(`${appSecret}:1`).toString('base64');
    const res = await TokenManager.getToken(secret);

    const { authorization } = res;
    expect(authorization).toMatch(regex);
  });

  test('getToken KO', async() => {
    const res = await TokenManager.getToken('INVENT');

    const {
      code,
      message,
    } = res;

    expect(code).toBe(401);
    expect(message).toBe('Unauthorized');
  });

  test('verifyToken OK', async() => {
    const secret = TokenManager.generateToken(null);
    const res = await TokenManager.verifyToken(secret);

    expect(res).toBe(true);
  });

  test('verifyToken KO', async() => {
    const res = await TokenManager.verifyToken('INVENT');

    expect(res).toBe(false);
  });
});
