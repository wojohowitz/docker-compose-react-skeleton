const express = require('express');
const app = express();
const morgan = require('morgan');

const db = require('./db/mongo');

app.use(morgan('dev'));

app.use('/api', require('./router'));

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
}

app.listen(3001, () => console.log('API UP'));
