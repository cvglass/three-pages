const express = require('express');
const router = new express.Router();

const User = require('../db/models').User

router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if(!user) {
      res.sendStatus(401);
    } else if(req.body.password === user.password) {
      req.session.userId = user.id;
      res.redirect('/about')
    } else {
      res.sendStatus(401)
    }
  })
  .catch(next)
})

module.exports = router;
