const Sequelize = require('sequelize');
const db = require('../db');

const Entry = db.define('entry', {
  text: Sequelize.TEXT,
  month: Sequelize.STRING,
  day: Sequelize.STRING,
  year: Sequelize.STRING,
  sentiment: Sequelize.STRING,
  topWords: Sequelize.ARRAY(Sequelize.TEXT),
}, {
  hooks: {
    beforeCreate: function(entry) {
      if(!entry.month) entry.month = new Date().getMonth() + 1;
      if(!entry.day) entry.day = new Date().getDate();
      if(!entry.year) entry.year = new Date().getFullYear()
    }
  }
});

module.exports = Entry;
