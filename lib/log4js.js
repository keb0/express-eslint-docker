const log4js = require('log4js')
 
log4js.configure({
  appenders : {
    system : {type : 'file', filename : 'logs/system.log'}
  },
  categories : {
    default : {appenders : ['system'], level : 'debug'},
  }
});
