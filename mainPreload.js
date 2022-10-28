const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openSida: () => ipcRenderer.send('open-sida'),
    closeSida: () => ipcRenderer.send('close-sida-window'),
    getToken: (callback) => ipcRenderer.on('get-token', callback),
    dbUpdateNotifier: (callback) => ipcRenderer.on('db-update', callback),
    // createUsers: (usersdata) => ipcRenderer.invoke('create-users', usersdata),
    getStudents: (token) => ipcRenderer.invoke('get-students', token),
});
