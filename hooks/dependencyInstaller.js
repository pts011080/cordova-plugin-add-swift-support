console.log("Running hook to npm install hooks pre-requisites");

module.exports = function (context) {
  //var shell = context.requireCordovaModule('shelljs');
  var shell = require('shelljs');

  shell.cd(context.opts.plugin.dir);
  shell.exec('npm install');
};