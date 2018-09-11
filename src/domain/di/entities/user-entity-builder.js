'use strict';

const UserEntity = require('../../entities/user-entity');
const persistentService = require('../services/persistent-service-builder');

const userEntity = new UserEntity(persistentService);

module.exports = userEntity;
