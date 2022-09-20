const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openSida: () => ipcRenderer.send('open-sida'),
    // getCodeMelli: () => ipcRenderer.send('get-code-melli'),
    closeSida: () => ipcRenderer.send('close-sida-window'),
    getToken: (callback) => ipcRenderer.on('get-token', callback),
    dbUpdateNotifier: (callback) => ipcRenderer.on('db-update', callback),
    // sendCodeMelli: (callback) => ipcRenderer.on('send-code-melli', callback),
    // createUsers: (usersdata) => ipcRenderer.invoke('create-users', usersdata),
    getStudents: (token) => ipcRenderer.invoke('get-students', token),
});
