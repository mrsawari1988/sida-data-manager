const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfig');

const Scores = sequelize.define('score', {
    nationalId: DataTypes.TEXT,
    majorId: DataTypes.TEXT,
    classId: DataTypes.TEXT,
    grade: DataTypes.TEXT,
    courseId: DataTypes.TEXT,
    courseTitle: DataTypes.TEXT,
    mostamar1: DataTypes.INTEGER,
    nime1: DataTypes.INTEGER,
    mostamar2: DataTypes.INTEGER,
    nime2: DataTypes.INTEGER,
    final: DataTypes.INTEGER,
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    majorTitle: DataTypes.TEXT,
    gradeTitle: DataTypes.TEXT,
    classTitle: DataTypes.TEXT,
});

module.exports = Scores;
