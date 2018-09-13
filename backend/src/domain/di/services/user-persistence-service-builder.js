'use strict';

const UserPersistenceService = require('../../services/user-persistence-service');
const mongoService = require('./mongo/mongo-service-builder');

const userPersistenceService = new UserPersistenceService(mongoService);

module.exports = userPersistenceService;
