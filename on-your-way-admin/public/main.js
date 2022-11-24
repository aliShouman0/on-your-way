const { app, BrowserWindow } = require("electron");
const path = require("path");

require("@electron/remote/main").initialize();

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "./public/logo-gold.ico"),
    webPreferences: {
      enableRemoteModule: true,
    },
  });
  //enableRemoteModule
  // this will allow us to run functions in
  // the background process triggered by
  // events happening in react components
  win.loadURL("http://localhost:3000");
 
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
