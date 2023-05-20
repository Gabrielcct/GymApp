const { app, BrowserWindow } = require("electron");
// Node module(s).
const nodePath = require("path");
let win = null;

function createWindow() {
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: 800,
    height: 800,
    backgroundColor: "#ffffff",
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      enableRemoteModule: false,
      preload: nodePath.join(__dirname, "preload.js"),
    },
  });

  // Load the info-board window.
  win.loadFile(nodePath.join(__dirname, "/dist/gymfit/index.html")).then(() => {
    win.show();
  });

  //win.loadURL(`file:/${__dirname}/dist/index.html`);

  win.on("closed", function () {
    win = null;
  });
}

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (win == null) {
    createWindow();
  }
});

app.on("ready", () => {
  if (win == null) {
    createWindow();
  }
});
