'use strict';

class MongoMock {
  constructor() {
    this.dbName = null;
    this.url = null;

    this.client = {
      db: () => ({
        collection: () => ({
          updateOne: jest.fn(),
        }),
      }),
    };
  }
}

module.exports = new MongoMock();
