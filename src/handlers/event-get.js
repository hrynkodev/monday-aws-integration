const log = require('../utils/logger.shared');
const { success, failure } = require('../utils/response.utils');

const handler = async (event) => {
  try {
    log.info(event);

    return success({ message: 'Event is logged' });
  } catch (e) {
    log.error(e, 'Failed to log event: ');

    return failure(e.message);
  }
};

module.exports = {
  handler,
};
