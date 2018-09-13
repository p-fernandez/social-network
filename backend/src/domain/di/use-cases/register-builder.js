'use strict';

const RegisterUseCase = require('../../use-cases/register');
const passwordEntity = require('../entities/password-entity-builder');
const userEntity = require('../entities/user-entity-builder');

const register = new RegisterUseCase(passwordEntity, userEntity);

module.exports = register;
