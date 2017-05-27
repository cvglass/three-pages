const express = require('express');
const api = new express.Router();
const db = require('../db/db');

api.use('/entries', require('./entries'))
api.use('/users', require('./users'))

api.use(function(err, req, res, next){
	res.status(400).send(err.message);
})

module.exports = api
