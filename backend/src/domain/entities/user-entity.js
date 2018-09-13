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
    return this.userPersistenceService.createUser(email, passwordHashed);
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
    return this.userPersistenceService.getUser(email);
  }

  userExists(email) {
    return this.userPersistenceService.userExists(email);
  }
}

module.exports = UserEntity;
