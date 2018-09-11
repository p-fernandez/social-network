'use strict';

class GetTokenUseCase {
  constructor(tokenEntity) {
    this.tokenEntity = tokenEntity;
  }

  execute(digest) {
    return this.tokenEntity.getToken(digest);
  }
}

module.exports = GetTokenUseCase;
