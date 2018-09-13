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
    this.updateOne = this.updateOne.bind(this);
  }

  addUserConnection(userId, requestedId) {
    const query = { _id: ObjectId(userId) };
    const update = { $addToSet: { friends: ObjectId(requestedId) } };

    return this.updateOne(query, update);
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
      } catch (error) {
        return reject(error);
      }
    });
  }

  getUser(email) {
    return this.mongoRepository.client
      .db(`${this.mongoRepository.dbName}`).collection('users').findOne({ email });
  }

  removeUserConnection(userId, requestedId) {
    const query = { _id: ObjectId(userId) };
    const update = { $pull: { friends: ObjectId(requestedId) } };

    return this.updateOne(query, update);
  }

  updateOne(query, update) {
    return this.mongoRepository.client
      .db(`${this.mongoRepository.dbName}`)
      .collection('users')
      .updateOne(query, update);
  }
}

module.exports = MongoService;
