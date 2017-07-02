const API = require('express').Router();
const fs = require('fs');
const path = require('path');


let routeFiles = fs.readdirSync(__dirname);

routeFiles.forEach(fileName => {
  let baseName, extension;
  [ baseName, extension ]  = fileName.split('.');
  if(baseName != 'index' && extension == 'js') {
    let routeName = '/' + baseName;
    API.use(routeName, require(path.join(__dirname, fileName)));
  }
});


module.exports = API;
