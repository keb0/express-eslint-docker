const log4js = require('log4js')

log4js.configure({
  appenders: {
    out: { type: 'stdout', layout: {
      type: 'pattern',
      pattern: '%d %p %c %x{logEvent} %m%n',
      tokens: {
        logEvent: logEvent => {
          if (Object.prototype.toString.call(logEvent.data[0]).slice(8, -1) === "Object") {
            return "abc";
          }
          return "123456789";
        }
      }
    }}
  },
  categories: { default: { appenders: ['out'], level: 'info' } }
});

const logger = log4js.getLogger();
logger.info({ abv : "doing something." });
logger.info("doing something.");
