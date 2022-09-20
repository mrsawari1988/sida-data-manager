const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfig');

const Teacher = sequelize.define('teacher', {
    personelId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    personelFirstName: DataTypes.STRING,
    personelLastName: DataTypes.STRING,
    nationalCode: DataTypes.STRING,
});

module.exports = Teacher;
