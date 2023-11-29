const { join } = require('path');
const isDev = require("electron-is-dev");
const { app, BrowserWindow,Menu } = require("electron");
Menu.setApplicationMenu(null)
const devPath = "http://localhost:3001";
const buildPath = `file://${join(__dirname, "../build/index.html")}`;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 740,
        webPreferences: { devTools: false } // Corrected option name
    });
 mainWindow.maximize()
    mainWindow.loadURL(isDev ? devPath : buildPath);

    mainWindow.on("closed", () => {
        mainWindow = null; // Corrected assignment
    });
}

app.on("ready", createWindow);

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});