'use strict';

const GetTokenUseCase = require('../../use-cases/get-token');
const tokenEntity = require('../entities/token-entity-builder');

const getTokenUseCase = new GetTokenUseCase(tokenEntity);

module.exports = getTokenUseCase;
