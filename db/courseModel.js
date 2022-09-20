const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfig');

const Course = sequelize.define('course', {
    title: DataTypes.STRING,
    classRoomId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    personelId: DataTypes.INTEGER,
    gradeTypeId: DataTypes.INTEGER,
    classRoomTitle: DataTypes.STRING,
    majorId: DataTypes.INTEGER,
    nationalCode: DataTypes.STRING,
});

module.exports = Course;
