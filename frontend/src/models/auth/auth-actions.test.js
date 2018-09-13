import jwt from 'jsonwebtoken';

import {
  checkStorageHasToken,
  decodeJwt,
  deleteTokenInStorage,
  generateDigest,
  getId,
  getTokenAction,
  isAdmin,
  saveTokenInStorage,
} from './actions';

import Api from '../../http/Api';

class LocalStorageMock {
  constructor(store = {}) {
    this.store = { ...store };
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

const mockError = 'error';
const mockDigest = 'digest';
const mockInfo = { iss: 1, admin: true };

beforeAll(() => {
  global.localStorage = new LocalStorageMock({ token: 'jsonwebtoken' });
});

describe('Auth actions', () => {
  test('checkStorageHasToken', () => {
    jwt.verify = jest.fn()
      .mockReturnValue(true);

    const res = checkStorageHasToken();
    expect(res).toBe(true);
  });

  test('checkStorageHasToken KO', () => {
    jwt.verify = jest.fn()
      .mockReturnValue(null);

    const res = checkStorageHasToken();
    expect(res).toBe(false);
  });

  test('decodeJwt', () => {
    jwt.verify = jest.fn()
      .mockReturnValue(mockInfo);

    const res = decodeJwt();
    expect(res).toEqual(mockInfo);
  });

  test('decodeJwt ko', () => {
    jwt.verify = jest.fn()
      .mockReturnValue(null);

    const res = decodeJwt();
    expect(res).toBeNull();
  });

  test('deleteTokenInStorage', () => {
    const res = deleteTokenInStorage();
    expect(res).toBe(true);
  });

  test('deleteTokenInStorage ko', () => {
    localStorage.removeItem = jest.fn(() => {
      throw new Error(mockError);
    });

    const res = deleteTokenInStorage();
    expect(res).toBe(false);
  });

  test('generateDigest', () => {
    const res = generateDigest(1, 'admin');

    const inv = atob(res);
    expect(inv).toEqual(`${process.env.REACT_APP_CLIENT_KEY}:1:admin`);
  });

  test('getId', () => {
    jwt.verify = jest.fn()
      .mockReturnValue(mockInfo);

    const res = getId();
    expect(res).toBe(1);
  });

  test('getId ko', () => {
    jwt.verify = jest.fn()
      .mockReturnValue(false);

    const res = getId();
    expect(res).toBe(0);
  });

  test('getTokenAction', () => {
    Api.post = jest.fn(() => Promise.resolve({
        data: {
          authorization: mockDigest,
        },
        status: 200,
        statusText: 'OK',
      }));

    const res = getTokenAction(mockDigest);
    expect(res).resolves.toBe(mockDigest);
  });

  test('getTokenAction ko', () => {
    Api.post = jest.fn(() => Promise.resolve({
        data: {
          authorization: mockDigest,
        },
        status: 200,
        statusText: 'ERR',
      }));

    const res = getTokenAction(mockDigest);
    expect(res).resolves.toBe(null);
  });
  
  test('isAdmin', () => {
    jwt.verify = jest.fn()
      .mockReturnValue(mockInfo);

    const res = isAdmin();
    expect(res).toBe(true);
  });

  test('isAdmin Ko', () => {
    jwt.verify = jest.fn()
      .mockReturnValue({ user: true });

    const res = isAdmin();
    expect(res).toBe(false);
  });

 test('saveTokenInStorage', () => {
    saveTokenInStorage('yes');
    const token = localStorage.getItem('token');
    expect(token).toBe('yes');
  });
});


