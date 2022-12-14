const { ipcMain } = require('electron');
const { sidaDataGetter } = require('./sidaDataExporter');

// const User = require('./db/userModel');
const Student = require('../db/studentModel');
const Course = require('../db/courseModel');
const Class = require('../db/classModel');
// const Score = require('./db/scoresModel');
const Teacher = require('../db/teacherModel');

module.exports = function (mainWindow) {
    ipcMain.handle('get-students', async (event, token) => {
        try {
            const students = await sidaDataGetter(token, 'students');
            console.log(students);
            mainWindow.webContents.send('db-update', {
                datafield: 'saving-students',
            });
            await Student.bulkCreate(students);
            mainWindow.webContents.send('db-update', {
                datafield: 'saved-students',
            });

            // const classes = await sidaDataGetter(token, 'classes');
            // console.log(classes);
            // mainWindow.webContents.send('db-update', {
            //     datafield: 'saving-classes',
            // });
            // const teachers = await sidaDataGetter(token, 'teachers');
            // console.log(teachers);
            // mainWindow.webContents.send('db-update', {
            //     datafield: 'saving-teachers',
            // });
            // const courses = await sidaDataGetter(token, 'courses');
            // console.log(courses);
            // mainWindow.webContents.send('db-update', {
            //     datafield: 'saving-courses',
            // });
        } catch (error) {
            console.log(error);
            return 'something bad happend';
        }
    });
};
