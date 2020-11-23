const { app, BrowserWindow } = require('electron');

const WINDOW_WIDTH = 600;
const WINDOW_HEIGHT = 800;

const createWindow = () => {
    const browserWindow = new BrowserWindow({
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        webPreferences: {
            nodeIntegration: true
        }
    });

    browserWindow.loadFile('index.html');
    browserWindow.webContents.openDevTools();
}

const quit = () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
}

const activate = () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
}

const startApp = () => {
    app.whenReady().then(createWindow);
    app.on('window-all-closed', quit);
    app.on('activate', activate);
};

exports.startApp = startApp;