'use strict';

class UserActionsEntity {
  constructor(persistentService) {
    this.persistentService = persistentService;

    this.addUserConnection = this.addUserConnection.bind(this);
    this.removeUserConnection = this.removeUserConnection.bind(this);
  }

  addUserConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.persistentService.addUserConnection(userId, requestedId)
        .then(resolve)
        .catch(reject);
    });
  }

  removeUserConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.persistentService.removeUserConnection(userId, requestedId)
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = UserActionsEntity;
