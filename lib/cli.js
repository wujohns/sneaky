// Generated by CoffeeScript 1.6.3
(function() {
  var args, cli, commander, deploy, _p;

  commander = require('commander');

  _p = require('../package');

  deploy = require('./deploy');

  commander.version(_p.version).usage('<command> <options> <projects>');

  commander.option('-f, --force', 'redeploy repository');

  commander.option('-c, --config', 'user defined configure file');

  args = commander.parse(process.argv);

  cli = function() {
    var options;
    options = {};
    options.force = args.force || false;
    if (args.args[0] != null) {
      options.projects = args.args[0];
    }
    return deploy(options);
  };

  module.exports = cli;

}).call(this);