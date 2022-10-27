const { ipcMain } = require('electron');
const { newDynamicSidaExporter } = require('./sidaDataExporter');
module.exports = function (mainWindow) {
    ipcMain.handle('get-students', async (event, token) => {
        console.log(token);
        try {
            const students = await newDynamicSidaExporter(token, 'students');
            console.log(students);
            mainWindow.webContents.send('db-update', {
                datafield: 'saving-students',
            });
            const classes = await newDynamicSidaExporter(token, 'classes');
            console.log(classes);
            mainWindow.webContents.send('db-update', {
                datafield: 'saving-classes',
            });
            const teachers = await newDynamicSidaExporter(token, 'teachers');
            console.log(teachers);
            mainWindow.webContents.send('db-update', {
                datafield: 'saving-teachers',
            });
            const courses = await newDynamicSidaExporter(token, 'courses');
            console.log(courses);
            mainWindow.webContents.send('db-update', {
                datafield: 'saving-courses',
            });
            return 'classes data recieved';
        } catch (error) {
            console.log(error);
            return 'something bad happend';
        }
    });
};
