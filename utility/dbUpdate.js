const { ipcMain } = require('electron');
const { newDynamicSidaExporter } = require('./sidaDataExporter');
module.exports = function (mainWindow) {
    ipcMain.handle('get-students', async (event, token) => {
        try {
            // await getStudents(token);
            await newDynamicSidaExporter(token, 'students');
            const students = await newDynamicSidaExporter(token, 'students');
            mainWindow.webContents.send('db-update', {
                datafield: 'students',
            });
            const classes = await newDynamicSidaExporter(token, 'classes');
            mainWindow.webContents.send('db-update', {
                datafield: 'classes',
            });
            const teachers = await newDynamicSidaExporter(token, 'teachers');
            mainWindow.webContents.send('db-update', {
                datafield: 'teachers',
            });
            const courses = await newDynamicSidaExporter(token, 'courses');
            mainWindow.webContents.send('db-update', {
                datafield: 'courses',
            });
            return 'classes data recieved';
        } catch (error) {
            console.log(error);
            return 'something bad happend';
        }
    });
};
