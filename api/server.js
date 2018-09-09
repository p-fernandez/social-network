'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const path = require('path');

const routes = require('./routes');
const WhitelistManager = require('./WhitelistManager');

const mongoRepository = require('./di/repositories/mongo-repository-builder');

const envFilePath = path.join(__dirname, '..', 'default.env');

if (fs.existsSync(envFilePath)) {
  require('dotenv').config({ path: envFilePath });
} else {
  throw new Error('default.env not found');
}

const port = process.env.PORT;
const app = express();

/**
 * Enable CORS with a origin whitelist of valid domains
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');

  const { origin } = req.headers;

  if (WhitelistManager.isValidOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,HEAD,PATCH,PUT,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Accept-Version, Authorization, Channel');
  next();
});

/**
 * Use helmet to prevent some attackers
 */
app.use(helmet());

/**
 * Accept application/json body data.
 */
app.use(bodyParser.json());

/**
 * If body parser fails, this middleware will be executed
 * @param {err} Object containing raw body, status and statusCode
 */
app.use((err, req, res, next) => {
  res.status(400).send('Bad Request. Body content is not properly formatted');
});

app.use('/api/auth', routes.AuthRouter);
app.use('/api/users', routes.UserRouter);

app.use('/', (req, res) => {
  res.status(404).send({ message: 'Unknown resource' });
});

/**
 * Special middleware to catch sync unhandled errors
 */
app.use((err, req, res, next) => {
  res.status(500).send({
    message: err.message || 'Internal server error',
  });
});

class Server {
  constructor() {
    this.server = null;

    this.init = this.init.bind(this);
    this.shutdown = this.shutdown.bind(this);
  }

  init() {
    return new Promise(async(resolve) => {
      this.server = app.listen(port);
      console.log(`API server listening in port ${port}`);
      await mongoRepository.connect();
      return resolve();
    });
  }

  shutdown() {
    return new Promise((resolve, reject) => {
      this.server.close()
        .then(() => mongoRepository.close())
        .then(resolve)
        .catch(reject);
    });
  }
}

const server = new Server();
server.init().catch(err => console.error(`Boot error ${err}`));

module.exports = server;
