const pino = require('pino');

module.exports = ({ level = 'info' } = {}) => {
  const logger = pino({ level });

  return {
    info: (...args) => logger.info(...args),
    error: (...args) => logger.error(...args),
    warn: (...args) => logger.warn(...args),
  };
};
