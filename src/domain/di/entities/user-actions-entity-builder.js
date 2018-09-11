'use strict';

const UserActionsEntity = require('../../entities/user-actions-entity');
const userPersistenceService = require('../services/user-persistence-service-builder');

const userActionsEntity = new UserActionsEntity(userPersistenceService);

module.exports = userActionsEntity;
