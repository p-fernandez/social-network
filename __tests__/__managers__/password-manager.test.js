'use strict';

const bcrypt = require('bcrypt');

const PasswordManager = require('../../api/di/managers/password-manager-builder');

const errorMessage = 'This blew up!';

describe('Password Manager', () => {
  test('compare OK', () => {
    bcrypt.compare = jest.fn()
      .mockResolvedValue(true);

    const res = PasswordManager.compare('password', 'password');

    expect(res).resolves.toBe(true);
  });

  test('compare KO', () => {
    bcrypt.compare = jest.fn()
      .mockResolvedValue(false);

    const res = PasswordManager.compare('password', 'passwordDifferent');

    expect(res).rejects.toEqual(false);
  });

  test('compare KO bcrypt crashes', () => {
    bcrypt.compare = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PasswordManager.compare('password', 'passwordDifferent');

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getPasswordHashed OK', async() => {
    bcrypt.genSalt = jest.fn()
      .mockResolvedValue('salt');
    bcrypt.hash = jest.fn()
      .mockResolvedValue('passwordHashed');

    const res = await PasswordManager.getPasswordHashed('password');

    expect(res).toBe('passwordHashed');
  });

  test('getPasswordHashed KO bcrypt crashes', () => {
    bcrypt.genSalt = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PasswordManager.getPasswordHashed('password');

    expect(res).rejects.toEqual(new Error(errorMessage));
  });

  test('getPasswordHashed KO bcrypt crashes 2', () => {
    bcrypt.genSalt = jest.fn()
      .mockResolvedValue('salt');
    bcrypt.hash = jest.fn()
      .mockRejectedValue(new Error(errorMessage));

    const res = PasswordManager.getPasswordHashed('password');

    expect(res).rejects.toEqual(new Error(errorMessage));
  });
});
