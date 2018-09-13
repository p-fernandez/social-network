'use strict';

const UserActionsController = require('../../controllers/user-actions-controller');
const addConnectionUseCase = require('../../../domain/di/use-cases/add-connection-builder');
const removeConnectionUseCase = require('../../../domain/di/use-cases/remove-connection-builder');

const userActionsController = new UserActionsController(
  addConnectionUseCase,
  removeConnectionUseCase
);

module.exports = userActionsController;
