'use strict';

const LoginUseCase = require('../../use-cases/login');
const passwordEntity = require('../entities/password-entity-builder');
const userEntity = require('../entities/user-entity-builder');

const login = new LoginUseCase(passwordEntity, userEntity);

module.exports = login;
