'use strict';

class UserActionsEntity {
  constructor(userPersistenceService) {
    this.userPersistenceService = userPersistenceService;

    this.addUserConnection = this.addUserConnection.bind(this);
    this.removeUserConnection = this.removeUserConnection.bind(this);
  }

  addUserConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.userPersistenceService.addUserConnection(userId, requestedId)
        .then(resolve)
        .catch(reject);
    });
  }

  removeUserConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.userPersistenceService.removeUserConnection(userId, requestedId)
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = UserActionsEntity;
