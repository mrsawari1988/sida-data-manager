const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfig');

const Student = sequelize.define('student', {
    birthDate: DataTypes.INTEGER,
    birthPlace: DataTypes.STRING,
    classRoomId: DataTypes.INTEGER,
    fatherMobileNumber: DataTypes.INTEGER,
    fatherName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    gradeTypeId: DataTypes.INTEGER,
    homeAddress: DataTypes.STRING,
    homePostalCode: DataTypes.STRING,
    homeTelephone: DataTypes.STRING,
    issuePlace: DataTypes.STRING,
    lastName: DataTypes.STRING,
    majorId: DataTypes.INTEGER,
    majorTitle: DataTypes.STRING,
    nationalCode: DataTypes.INTEGER,
    radifID: DataTypes.INTEGER,
    seriTypeId: DataTypes.INTEGER,
    seriTypeTitle: DataTypes.STRING,
    serialID: DataTypes.INTEGER,
    studentMobileNumber: DataTypes.INTEGER,
});

module.exports = Student;
