const Sequelize = require('sequelize');
const db = require('../db');

const Server = db.define('server', {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  port: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Server;
