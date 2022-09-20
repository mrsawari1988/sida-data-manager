const { BrowserWindow, ipcMain } = require('electron');
const path = require('path');

module.exports = function (win) {
    let sidaWindow = new BrowserWindow({
        width: 800,
        height: 700,
        show: false,
    });
    sidaWindow.webContents.openDevTools();
    sidaWindow.loadURL('https://sida.medu.ir');
    sidaWindow.once('ready-to-show', () => sidaWindow.show());
    ipcMain.on('close-sida-window', () => sidaWindow.hide());
    sidaWindow.webContents.on('did-navigate-in-page', (event, url) => {
        if (url === 'https://sida.medu.ir/#/home') {
            sidaWindow.webContents
                .executeJavaScript('sessionStorage.getItem("token");', true)
                .then((result) => {
                    console.log('reuuning js code ');
                    win.webContents.send('get-token', result);
                });
        }
    });
};
