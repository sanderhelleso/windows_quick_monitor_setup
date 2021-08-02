const { app, BrowserWindow } = require("electron");
const debug = require("electron-debug");
const isDev = require("electron-is-dev");
const path = require("path");

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 600;

const createWindow = () => {
	debug();

	const mainWindow = new BrowserWindow({
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		resizable: false,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	mainWindow.removeMenu();
	mainWindow.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`
	);
	mainWindow.on("closed", () => (mainWindow = null));
};

const quit = () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
};

const activate = () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
};

const startApp = () => {
	app.whenReady().then(createWindow);
	app.on("window-all-closed", quit);
	app.on("activate", activate);
};

exports.startApp = startApp;
