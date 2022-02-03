const { db } = require('./src/schemas/index.js');
const { start } = require('./src/server.js');
require('dotenv').config();

db.sync()
  .then(() => {
    console.log('DB connected');
    start(process.env.PORT);
  })
  .catch(console.error);
