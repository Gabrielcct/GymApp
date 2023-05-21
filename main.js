"use strict";
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const nodePath = require("path");
let win = null;

// WINDOW
function createWindow() {
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: 1200,
    height: 1080,
    min_width: 680,
    min_height: 660,
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

  win.on("closed", function () {
    win = null;
  });
}

// APP
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  if (win == null) {
    createWindow();
  }
});
// MENU
const { Menu, MenuItem } = require("electron");

const template = [
  {
    label: "File",
    submenu: [
      {
        role: "quit",
      },
    ],
  },
  {
    label: "Edit",
    submenu: [
      {
        role: "undo",
      },
      {
        role: "redo",
      },
      {
        type: "separator",
      },
      {
        role: "cut",
      },
      {
        role: "copy",
      },
      {
        role: "paste",
      },
    ],
  },

  {
    label: "View",
    submenu: [
      {
        role: "togglefullscreen",
      },
      {
        role: "minimize",
      },
      {
        type: "separator",
      },
      {
        role: "zoomin",
      },
      {
        role: "zoomout",
      },
      {
        role: "resetzoom",
      },
    ],
  },

  {
    label: "About GymFit",
    submenu: [
      {
        role: "about",
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);
