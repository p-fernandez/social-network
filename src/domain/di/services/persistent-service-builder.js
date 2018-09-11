'use strict';

const PersistentService = require('../../services/persistent-service');
const mongoService = require('./mongo/mongo-service-builder');

const persistentService = new PersistentService(mongoService);

module.exports = persistentService;
