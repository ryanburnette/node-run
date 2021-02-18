var {spawn} = require('child_process')

module.exports = function(cmd, _shell) {
  if (!_shell) {
    _shell = 'bash';
  }
  var shell = spawn(_shell);
  return new Promise(function(resolve) {
    shell.stdin.end(cmd);
    shell.stdout.on('data', function(data) {
      process.stdout.write(data.toString());
      
    });
    shell.stderr.on('data', function(data) {
      process.stderr.write(data.toString());
    });
    shell.on('exit', function() {
      resolve();
    });
  });
};
