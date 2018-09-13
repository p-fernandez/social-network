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
    return this.persistenceProvider.addUserConnection(userId, requestedId);
  }

  createUser(email, password) {
    return this.persistenceProvider.createUser(email, password);
  }

  getAll() {
    return this.persistenceProvider.getAll();
  }

  getUser(email) {
    return this.persistenceProvider.getUser(email);
  }

  removeUserConnection(userId, requestedId) {
    return this.persistenceProvider.removeUserConnection(userId, requestedId);
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
