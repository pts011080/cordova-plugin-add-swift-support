console.log("Running hook to install hooks pre-requisites");
module.exports = function (context) {
  // make sure android platform is part of build 
  if (ctx.opts.platforms.indexOf('ios') < 0) {
    return;
  }
  return new Promise((resolve, reject) => {
    
    var xcode = require("xcode");
    var semver = require('semver');
    
    var child_process = require('child_process');
    child_process.exec('npm install', {cwd: __dirname}, function (error) {
      if (error !== null) {
        console.log('exec error: ' + error);
        reject('npm installation failed');
      }
      else {
        resolve();
      }
    });
  });
};