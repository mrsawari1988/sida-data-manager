const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfig');

const Class = sequelize.define('class', {
    classId: DataTypes.INTEGER,
    classRoomTitle: DataTypes.STRING,
    gradeTypeId: DataTypes.INTEGER,
    majorId: DataTypes.INTEGER,
    majorTitle: DataTypes.STRING,
});

module.exports = Class;
