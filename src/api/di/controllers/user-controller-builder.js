'use strict';

const UserController = require('../../controllers/user-controller');
const getUsersUseCase = require('../../../domain/di/use-cases/get-users-builder');

const userController = new UserController(getUsersUseCase);

module.exports = userController;
