'use strict';

class UserEntity {
  constructor(persistentService) {
    this.persistentService = persistentService;

    this.createUser = this.createUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.userExists = this.userExists.bind(this);
  }

  createUser(email, passwordHashed) {
    return new Promise((resolve, reject) => {
      this.persistentService.createUser(email, passwordHashed)
        .then(resolve)
        .catch(reject);
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.persistentService.getAll()
        .then(users => resolve({
          users,
        }))
        .catch(reject);
    });
  }

  getUser(email) {
    return new Promise((resolve, reject) => {
      this.persistentService.getUser(email)
        .then(resolve)
        .catch(reject);
    });
  }

  userExists(email) {
    return new Promise((resolve, reject) => {
      this.persistentService.userExists(email)
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = UserEntity;
