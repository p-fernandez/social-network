'use strict';

const bcrypt = require('bcrypt');

const PasswordEntity = require('../../../src/domain/di/entities/password-entity-builder');

const errorMessage = 'This blew up!';

describe('Password Entity', () => {
  test('compare OK', () => {
    bcrypt.compare = jest.fn()
      .mockResolvedValue(true);

    const res = PasswordEntity.compare('password', 'password');

    expect(res).resolves.toBe(true);
  });

  test('compare KO', () => {
    bcrypt.compare = jest.fn().mockResolvedValue(false);

    const res = PasswordEntity.compare('password', 'passwordDifferent');

    expect(res).resolves.toEqual(false);
  });

  test('compare KO bcrypt crashes', () => {
    bcrypt.compare = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PasswordEntity.compare('password', 'passwordDifferent');

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getPasswordHashed OK', () => {
    bcrypt.genSalt = jest.fn()
      .mockResolvedValue('salt');
    bcrypt.hash = jest.fn()
      .mockResolvedValue('passwordHashed');

    const res = PasswordEntity.getPasswordHashed('password');

    expect(res).resolves.toBe('passwordHashed');
  });

  test('getPasswordHashed KO bcrypt crashes', () => {
    bcrypt.genSalt = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PasswordEntity.getPasswordHashed('password');

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getPasswordHashed KO bcrypt crashes 2', () => {
    bcrypt.genSalt = jest.fn()
      .mockResolvedValue('salt');
    bcrypt.hash = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PasswordEntity.getPasswordHashed('password');

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
