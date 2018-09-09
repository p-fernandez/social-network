'use strict';

const MongoService = require('../../services/mongo-service');
const mongoRepository = require('../repositories/mongo-repository-builder');

const mongoService = new MongoService(mongoRepository);

module.exports = mongoService;
