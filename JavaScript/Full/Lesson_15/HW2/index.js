export const createLogger = () => {
  const recArray = [];

  function warn(text) {
    const recordwarn = {};
    recordwarn.message = text;
    recordwarn.dateTime = new Date();
    recordwarn.type = 'warn';
    return recArray.push(recordwarn);
  }

  function error(text) {
    const recorderror = {};
    recorderror.message = text;
    recorderror.dateTime = new Date();
    recorderror.type = 'error';
    return recArray.push(recorderror);
  }

  function log(text) {
    const recordlog = {};
    recordlog.message = text;
    recordlog.dateTime = new Date();
    recordlog.type = 'log';
    return recArray.push(recordlog);
  }

  function getRecords(type) {
    const recMessage = [];
    recArray.forEach((messageId) => {
      if (type === undefined) {
        recMessage.push(messageId);
        return recMessage.sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1));
      }

      if (messageId.type === type) recMessage.push(messageId);
      return recMessage.sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1));
    });
    return recMessage;
  }
  return { warn, error, log, getRecords };
};

const logger = createLogger();

logger.error('Hi Ivan');
logger.log('Buy');
logger.warn('Hi and');
logger.warn('Hi');
console.log(logger.getRecords('warn'));
