'use strict';

class UserActionsEntity {
  constructor(userPersistenceService) {
    this.userPersistenceService = userPersistenceService;

    this.addUserConnection = this.addUserConnection.bind(this);
    this.removeUserConnection = this.removeUserConnection.bind(this);
  }

  addUserConnection(userId, requestedId) {
    return this.userPersistenceService.addUserConnection(userId, requestedId);
  }

  removeUserConnection(userId, requestedId) {
    return this.userPersistenceService.removeUserConnection(userId, requestedId);
  }
}

module.exports = UserActionsEntity;
