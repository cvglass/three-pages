'use strict';

// const Sequelize = require('sequelize');
const User = require('./user');
const Entry = require('./entry');

User.hasMany(Entry, {as: 'Entries'})

  module.exports = {
    User,
    Entry,
  }
