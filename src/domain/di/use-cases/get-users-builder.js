'use strict';

const GetUsersUseCase = require('../../use-cases/get-users');
const userEntity = require('../entities/user-entity-builder');

const getUsersUseCase = new GetUsersUseCase(userEntity);

module.exports = getUsersUseCase;
