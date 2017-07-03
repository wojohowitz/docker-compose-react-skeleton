const mongoose = require('mongoose');
const fs       = require('fs');
const path     = require('path');

mongoose.connect('mongodb://mongo:27017/olanyzer');

const db       = mongoose.connection;


db.on('error', console.error.bind(console, 'MongdoDB Connection Error:'));

db.once('open', setModels);

function setModels() {
  let dirFiles = fs.readdirSync(__dirname);
  dirFiles.forEach(setSchema);
}

function setSchema(fileName) {
  let baseName, extension;
  [ baseName, extension ]  = fileName.split('.');
  if(baseName != 'index' && extension == 'js') {
    let modelName = baseName[0].toUpperCase() + baseName.slice(1);
    console.log('setting ', modelName);
    db[modelName] = mongoose.model(modelName, require(path.join(__dirname, fileName)));
  }
}

module.exports = db;

