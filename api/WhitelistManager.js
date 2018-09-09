'use strict';

const allowedOrigins = [
  'http://localhost',
  'http://localhost:3000',
  'http://localhost:8000',
];

class WhitelistManager {
  static isValidOrigin(origin) {
    return allowedOrigins.indexOf(origin) !== -1;
  }
}

module.exports = WhitelistManager;
