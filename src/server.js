const express = require('express');
const app = express();

app.use(express.json());

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

module.exports = {
  app,
  start,
};
