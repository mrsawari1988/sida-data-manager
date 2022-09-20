const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfig');

const User = sequelize.define('user', {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
});

module.exports = User;
