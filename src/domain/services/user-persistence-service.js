'use strict';

class UserPersistenceService {
  constructor(persistenceProvider) {
    this.persistenceProvider = persistenceProvider;

    this.addUserConnection = this.addUserConnection.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getUser = this.getUser.bind(this);
    this.removeUserConnection = this.removeUserConnection.bind(this);
    this.userExists = this.userExists.bind(this);
  }

  addUserConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.persistenceProvider.addUserConnection(userId, requestedId)
        .then(resolve)
        .catch(reject);
    });
  }

  createUser(email, password) {
    return new Promise((resolve, reject) => {
      this.persistenceProvider.createUser(email, password)
        .then(resolve)
        .catch(reject);
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.persistenceProvider.getAll()
        .then(resolve)
        .catch(reject);
    });
  }

  getUser(email) {
    return new Promise((resolve, reject) => {
      this.persistenceProvider.getUser(email)
        .then(resolve)
        .catch(reject);
    });
  }

  removeUserConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.persistenceProvider.removeUserConnection(userId, requestedId)
        .then(resolve)
        .catch(reject);
    });
  }

  userExists(email) {
    return new Promise((resolve, reject) => {
      this.getUser(email)
        .then(user => resolve(!!user))
        .catch(reject);
    });
  }
}

module.exports = UserPersistenceService;
