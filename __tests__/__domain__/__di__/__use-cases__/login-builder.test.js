'use strict';

const LoginUseCaseBuilder = require('../../../../src/domain/di/use-cases/login-builder');

describe('Login Entity Builder', () => {
  test('Login Entity', () => {
    expect(LoginUseCaseBuilder).toEqual({
      passwordEntity: expect.anything(),
      userEntity: expect.anything(),
    });
  });
});
