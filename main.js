const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    win.loadURL(path.join(__dirname, './index.html'));
}

app.on('ready', function() {
    createWindow();
});
