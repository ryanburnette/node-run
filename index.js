'use strict';

var childProcess = require('child_process');
var spawn = childProcess.spawn;

module.exports = function(cmd, _shell) {
  if (!_shell) {
    _shell = 'bash';
  }
  var shell = spawn(_shell);
  return new Promise(function(resolve) {
    shell.stdin.end(cmd);
    shell.stdout.on('data', function(data) {
      console.log(data.toString());
    });
    shell.stderr.on('data', function(data) {
      console.log(data.toString());
    });
    shell.on('exit', function() {
      resolve();
    });
  });
};
