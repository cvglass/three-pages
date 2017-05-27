const express = require('express');
const router = new express.Router();

const User = require('../db/models').User

router.post('/', (req, res, next) => {
  User.findOne({
    where: req.body
  })
  .then(user => {
    if(!user) {
      res.sendStatus(401);
    } else {
      // req.sessions.userId = user.id;
      res.sendStatus(200)
    }
  })
  .catch(next)
})
