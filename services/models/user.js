// Imports sequelize
const Sequelize = require('sequelize');

// Data Types from Sequelize
const { DataTypes } = require('sequelize');

// Database Connection
const { db_connection } = require('../../database/db_connection');

// User
const User = db_connection.define('user', {
  user_id: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING
  },
  user_email: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'user',
  freezeTableName: true
});

module.exports = {
  User
}