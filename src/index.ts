import { app, BrowserWindow, dialog } from 'electron';
import * as fs from 'fs-extra';
import * as path from 'path';
import { addRxPlugin, createRxDatabase } from 'rxdb';

// eslint-disable-next-line @typescript-eslint/no-var-requires
addRxPlugin(require('pouchdb-adapter-leveldb'));
import leveldown = require('leveldown');
// eslint-disable-next-line import/no-unresolved
import { workspaceRxSchema } from './workspace_rxschema';
import { cardRxSchema } from './card_rxschema';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


const createWindow = async (): Promise<void> => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '../src/index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  const workspaceDB = await createRxDatabase({
    name: 'rxdesktop_data/workspace',
    adapter: leveldown,
    multiInstance: false,
  });
  const workspaceCollection = await workspaceDB.collection({
    name: 'workspace',
    schema: workspaceRxSchema,
  });

  const cardDB = await createRxDatabase({
    name: 'rxdesktop_data/card',
    adapter: leveldown,
    multiInstance: false,
  });
  const cardCollection = await workspaceDB.collection({
    name: 'card',
    schema: cardRxSchema,
  });

//  workspace.$.subscribe(changeEvent => console.dir(changeEvent));

  const filepath = await (await dialog.showOpenDialog(mainWindow)).filePaths;
  console.dir(filepath);
  if (filepath.length > 0) {
    const obj = fs.readJSONSync(filepath[0]);
    workspaceCollection.bulkInsert(obj['workspace']['spaces']).catch( e => { console.error(e) });    
    cardCollection.bulkInsert(obj['card']['cards']).catch( e => { console.error(e) });
  }

  workspaceCollection.findOne().where('id').eq("wROLTWRdwj3NL0BY1M-EFN").exec().then(doc => console.dir(doc.toJSON()));
  cardCollection.findOne().where('id').eq("cLGSJg49Si9kCG5iKOtIMC").exec().then(doc => console.dir(doc.toJSON()));  

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
