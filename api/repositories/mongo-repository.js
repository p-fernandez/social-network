'use strict';

const mongoClient = require('mongodb').MongoClient;

class MongoRepository {
  constructor() {
    this.client = null;
    this.dbName = null;
    this.url = null;

    this.close = this.close.bind(this);
    this.connect = this.connect.bind(this);
  }

  close() {
    return this.client.close();
  }

  connect() {
    return new Promise((resolve, reject) => {
      if (!this.client) {
        const user = process.env.DB_USER;
        const password = process.env.DB_PWD;
        const host = process.env.DB_HOST;
        const dbName = process.env.DB_NAME;

        this.dbName = dbName;

        const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true`;
        this.url = url;
        mongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
          if (err) {
            return reject(err);
          }

          console.log(`Database ${db.s.options.dbName} connected!`);
          this.client = db;
          return resolve();
        });
      }

      return resolve();
    });
  }
}

module.exports = MongoRepository;
