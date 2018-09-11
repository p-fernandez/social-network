'use strict';

const UserActionsEntity = require('../../entities/user-actions-entity');
const persistentService = require('../services/persistent-service-builder');

const userActionsEntity = new UserActionsEntity(persistentService);

module.exports = userActionsEntity;
