'use strict';

const RegisterUseCaseBuilder = require('../../../../src/domain/di/use-cases/register-builder');

describe('Register Entity Builder', () => {
  test('Register Entity', () => {
    expect(RegisterUseCaseBuilder).toEqual({
      passwordEntity: expect.anything(),
      userEntity: expect.anything(),
    });
  });
});
