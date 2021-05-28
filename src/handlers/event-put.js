const { get } = require('lodash/fp');
const { putEvent } = require('../services/event.service');
const { success, failure } = require('../utils/response.utils');
const log = require('../utils/logger.shared');

const lambda = async (payload) => putEvent(payload);

const handler = async (event) => {
  try {
    const body = JSON.parse(event.body).event;
    const payload = {
      ticket: get('pulseName', body),
      status: get('value.label.text', body),
      newParam: 'any',
    };

    log.info(payload, 'Putting following event: ');

    await lambda(payload);

    return success({ message: 'success' });
  } catch (e) {
    log.error(e, 'Failed to handle event');

    return failure(e.message);
  }
};

module.exports = {
  handler,
};
