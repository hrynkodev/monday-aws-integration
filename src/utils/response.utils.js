const toResponse = (code, data) => ({
  statusCode: code,
  body: data && JSON.stringify(data),
});

const success = (data) => toResponse(200, data);

const failure = (message) => toResponse(500, { message });

module.exports = {
  toResponse,
  success,
  failure,
};
