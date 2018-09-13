'use strict';

class RemoveConnectionUseCase {
  constructor(userActionsEntity) {
    this.userActionsEntity = userActionsEntity;
  }

  execute(userId, requestedId) {
    return new Promise((resolve, reject) => {
      this.userActionsEntity.removeUserConnection(userId, requestedId)
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
}

module.exports = RemoveConnectionUseCase;
