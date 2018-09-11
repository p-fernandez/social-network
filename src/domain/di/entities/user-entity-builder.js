'use strict';

const UserEntity = require('../../entities/user-entity');
const userPersistenceService = require('../services/user-persistence-service-builder');

const userEntity = new UserEntity(userPersistenceService);

module.exports = userEntity;
