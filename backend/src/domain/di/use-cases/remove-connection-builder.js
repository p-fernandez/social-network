'use strict';

const RemoveConnectionUseCase = require('../../use-cases/remove-connection');
const userActionsEntity = require('../entities/user-actions-entity-builder');

const removeConnectionUseCase = new RemoveConnectionUseCase(userActionsEntity);

module.exports = removeConnectionUseCase;
