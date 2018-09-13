'use strict';

const MongoService = require('../../../services/mongo/mongo-service');
const mongoRepository = require('../../infrastructure/mongo/mongo-connector-builder');

const mongoService = new MongoService(mongoRepository);

module.exports = mongoService;
