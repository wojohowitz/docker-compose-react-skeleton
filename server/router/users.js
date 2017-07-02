const Users = require('express').Router();

Users
  .route('/')
  .get(showUsers);

function showUsers(req, res, next) {
  res.send({ woot: true });
}

module.exports = Users
