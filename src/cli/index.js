module.exports = {

  '-v'        : require('./commands/version'),
  '--version' : require('./commands/version'),

  help        : require('./commands/help'),

  add         : require('./commands/add'),
  rm          : require('./commands/rm'),
  reload      : require('./commands/reload'),
  list        : require('./commands/list'),
  open        : require('./commands/open'),
  status      : require('./commands/status'),
  start       : require('./commands/start'),
  stop        : require('./commands/stop'),
  tail        : require('./commands/tail'),
  install     : require('./commands/install'),
  uninstall   : require('./commands/uninstall'),

  migrate     : require('./commands/migrate'),

  run: function(args) {
    var command = args[0]
    var options = args.slice(1)

    if (this[command]) {
      this[command](options)
    } else {
      this.help()
    }
  }
}
