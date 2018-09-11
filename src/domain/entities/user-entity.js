'use strict';

class UserEntity {
  constructor(userPersistenceService) {
    this.userPersistenceService = userPersistenceService;

    this.createUser = this.createUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.userExists = this.userExists.bind(this);
  }

  createUser(email, passwordHashed) {
    return new Promise((resolve, reject) => {
      this.userPersistenceService.createUser(email, passwordHashed)
        .then(resolve)
        .catch(reject);
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.userPersistenceService.getAll()
        .then(users => resolve({
          users,
        }))
        .catch(reject);
    });
  }

  getUser(email) {
    return new Promise((resolve, reject) => {
      this.userPersistenceService.getUser(email)
        .then(resolve)
        .catch(reject);
    });
  }

  userExists(email) {
    return new Promise((resolve, reject) => {
      this.userPersistenceService.userExists(email)
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = UserEntity;
