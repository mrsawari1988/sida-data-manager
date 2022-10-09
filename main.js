// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const sidaWindow = require('./pages/sida');
const sequelize = require('./db/dbConfig');
//loading Models
const User = require('./db/userModel');
const Student = require('./db/studentModel');
const Course = require('./db/courseModel');
const Class = require('./db/classModel');
const Score = require('./db/scoresModel');
const Teacher = require('./db/teacherModel');

const {
    getStudents,
    getClasses,
    getTeachers,
    getCourses,
    newDynamicSidaExporter,
} = require('./utility/sidaDataExporter');

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'mainPreload.js'),
        },
    });
    mainWindow.webContents.openDevTools();
    ipcMain.on('open-sida', () => {
        console.log('sida open Ordered');
        sidaWindow(mainWindow);
    });

    require('./utility/dbUpdate')(mainWindow);
    // ipcMain.handle('create-users', (event, usersdata) => {
    //     createUsers(usersdata);
    // });
    // ipcMain.handle('get-students', async (event, token) => {
    //     try {
    //         // await getStudents(token);
    //         await newDynamicSidaExporter(token, 'students');
    //         const students = await newDynamicSidaExporter(token, 'students');
    //         mainWindow.webContents.send('db-update', {
    //             datafield: 'students',
    //         });
    //         const classes = await newDynamicSidaExporter(token, 'classes');
    //         mainWindow.webContents.send('db-update', {
    //             datafield: 'classes',
    //         });
    //         const teachers = await newDynamicSidaExporter(token, 'teachers');
    //         mainWindow.webContents.send('db-update', {
    //             datafield: 'teachers',
    //         });
    //         const courses = await newDynamicSidaExporter(token, 'courses');
    //         mainWindow.webContents.send('db-update', {
    //             datafield: 'courses',
    //         });
    //         return 'classes data recieved';
    //     } catch (error) {
    //         console.log(error);
    //         return 'something bad happend';
    //     }
    // });
    // ipcMain.on('get-code-melli', async () => {
    //     try {
    //         const studentsIdobj = await Student.findAll({
    //             attributes: ['nationalCode'],
    //             raw: true,
    //         });
    //         const studentsidArray = await studentsIdobj.map((stu) => {
    //             return stu.nationalCode;
    //         });
    //         mainWindow.webContents.send('send-code-melli', studentsidArray);
    //     } catch (error) {
    //         console.log(err);
    //     }

    // });
    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000');

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
Class.hasMany(Student, { sourceKey: 'classId', foreignKey: 'classRoomId' });
sequelize
    .sync()
    .then((res) => {
        app.whenReady().then(async () => {
            createWindow();

            app.on('activate', () => {
                // On macOS it's common to re-create a window in the app when the
                // dock icon is clicked and there are no other windows open.
                if (BrowserWindow.getAllWindows().length === 0) createWindow();
            });
        });
        // Class.findAll({ where: { classId: 5556419 }, include: { model: Student }, raw: true })
        //     .then(async (res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    })
    .catch((err) => {
        console.log(err);
    });

sequelize
    .authenticate()
    .then((res) => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err);
    });

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
