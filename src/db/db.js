'use strict'
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/morningpages', {logging: false, native: true});

module.exports = db

require('./models')

