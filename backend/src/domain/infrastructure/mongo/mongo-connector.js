'use strict';

const util = require('util');
const { MongoClient } = require('mongodb');

const connect = util.promisify(MongoClient.connect);

const user = process.env.DB_USER;
const password = process.env.DB_PWD;
const host = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true`;

class MongoConnector {
  constructor() {
    this.client = null;
    this.dbName = dbName;
    this.url = url;

    this.close = this.close.bind(this);
    this.connect = this.connect.bind(this);
  }

  async close() {
    await this.client.close();
  }

  async connect() {
    if (!this.client) {
      try {
        const connection = await connect(url, { useNewUrlParser: true });
        this.client = connection;
        console.log(`Database ${connection.s.options.dbName} connected!`);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    } else {
      return true;
    }
  }
}

module.exports = MongoConnector;
