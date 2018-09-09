'use strict';

const fs = require('fs');

if (fs.existsSync('./default.env')) {
  require('dotenv').config({ path: './default.env' });
} else {
  throw new Error('default.env not found');
}
