const crypto = require('crypto');
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password');
    },
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt');
    },
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  planEnd: {
    type: Sequelize.DATEONLY,
    allowNull: true,
    defaultValue: null,
  },
  paymentTx: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    defaultValue: [],
  },
  paymentAddress: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  paymentDate: {
    type: Sequelize.ARRAY(Sequelize.DATEONLY),
    allownUll: false,
    defaultValue: [],
  },
  autoRenew: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    get() {
      let value;
      if (this.getDataValue('autoRenew') !== null) {
        value = this.getDataValue('autoRenew');
        value = value.toString();
        return value;
      } else {
        return null;
      }
    },
  },
  vpnId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

/**
 * classMethods
 */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

/**
 * hooks
 */
const setSaltAndPassword = user => {
  console.log('I see user', user);
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
