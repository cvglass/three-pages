const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: Sequelize.STRING
});

module.exports = User;
