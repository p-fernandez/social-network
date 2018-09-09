'use strict';

const { ObjectId } = require('mongodb');

class MongoService {
  constructor(mongoRepository) {
    this.mongoRepository = mongoRepository;

    this.addUserConnection = this.addUserConnection.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getUser = this.getUser.bind(this);
    this.removeUserConnection = this.removeUserConnection.bind(this);
    this.userExists = this.userExists.bind(this);
  }

  addUserConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      const query = { _id: ObjectId(userId) };
      const update = { $addToSet: { friends: ObjectId(requestedId) } };

      this.mongoRepository.client
        .db(`${this.mongoRepository.dbName}`)
        .collection('users')
        .updateOne(query, update)
        .then(resolve)
        .catch(reject);
    });
  }

  createUser(email, password) {
    return new Promise((resolve, reject) => {
      const document = {
        email,
        password,
        role: 'user',
        friends: [],
      };

      this.mongoRepository.client
        .db(`${this.mongoRepository.dbName}`).collection('users').insertOne(document)
        .then((result) => {
          const { insertedId } = result;
          return resolve({ _id: insertedId });
        })
        .catch(err => reject(err));
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      try {
        const query = { role: 'user' };
        const projection = { password: 0 };

        const cursor = this.mongoRepository.client
          .db(`${this.mongoRepository.dbName}`)
          .collection('users')
          .find(query);

        cursor.project(projection);

        const users = cursor.toArray();
        return resolve(users);
      } catch (Error) {
        return reject(Error);
      }
    });
  }

  getUser(email) {
    return new Promise((resolve, reject) => {
      this.mongoRepository.client
        .db(`${this.mongoRepository.dbName}`).collection('users').findOne({ email })
        .then(resolve)
        .catch(reject);
    });
  }

  removeUserConnection(userId, requestedId) {
    return new Promise((resolve, reject) => {
      const query = { _id: ObjectId(userId) };
      const update = { $pull: { friends: ObjectId(requestedId) } };

      this.mongoRepository.client
        .db(`${this.mongoRepository.dbName}`)
        .collection('users')
        .updateOne(query, update)
        .then(resolve)
        .catch(reject);
    });
  }

  userExists(email) {
    return new Promise((resolve, reject) => {
      this.getUser(email)
        .then(user => resolve(!!user))
        .catch(reject);
    });
  }
}

module.exports = MongoService;
