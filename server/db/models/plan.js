const Sequelize = require('sequelize');
const db = require('../db');

const Plan = db.define('plan', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  length: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
});

module.exports = Plan;
