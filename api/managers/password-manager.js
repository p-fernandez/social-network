'use strict';

const bcrypt = require('bcrypt');

class PasswordManager {
  constructor() {
    this.compare = this.compare.bind(this);
    this.getPasswordHashed = this.getPasswordHashed.bind(this);
  }

  compare(inputPassword, databasePassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(inputPassword, databasePassword)
        .then(resolve)
        .catch(reject);
    });
  }

  getPasswordHashed(password) {
    return new Promise((resolve, reject) => {
      const saltRounds = Number(process.env.SALT_ROUNDS);
      bcrypt.genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = PasswordManager;
