'use strict';

class UserManager {
  constructor(mongoService) {
    this.mongoService = mongoService;

    this.addConnection = this.addConnection.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.removeConnection = this.removeConnection.bind(this);
    this.userExists = this.userExists.bind(this);
  }

  addConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.mongoService.addUserConnection(userId, requestedId)
        .then((data) => {
          const {
            matchedCount,
            modifiedCount,
          } = data;

          if (matchedCount === 1 && modifiedCount === 1) {
            return resolve();
          }

          return resolve({
            code: matchedCount === 1 ? 202 : 404,
            message: 'Could not update connection',
          });
        })
        .catch(reject);
    });
  }

  createUser(email, passwordHashed) {
    return new Promise((resolve, reject) => {
      this.mongoService.createUser(email, passwordHashed)
        .then(resolve)
        .catch(reject);
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.mongoService.getAll()
        .then(users => resolve({
          users,
        }))
        .catch(reject);
    });
  }

  getUser(email) {
    return new Promise((resolve, reject) => {
      this.mongoService.getUser(email)
        .then(resolve)
        .catch(reject);
    });
  }

  removeConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.mongoService.removeUserConnection(userId, requestedId)
        .then((data) => {
          const {
            matchedCount,
            modifiedCount,
          } = data;

          if (matchedCount === 1 && modifiedCount === 1) {
            return resolve();
          }

          return resolve({
            code: matchedCount === 1 ? 202 : 404,
            message: 'Could not remove connection',
          });
        })
        .catch(reject);
    });
  }

  userExists(email) {
    return new Promise((resolve, reject) => {
      this.mongoService.userExists(email)
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = UserManager;
