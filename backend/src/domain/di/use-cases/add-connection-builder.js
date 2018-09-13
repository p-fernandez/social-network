'use strict';

const AddConnectionUseCase = require('../../use-cases/add-connection');
const userActionsEntity = require('../entities/user-actions-entity-builder');

const addConnectionUseCase = new AddConnectionUseCase(userActionsEntity);

module.exports = addConnectionUseCase;
