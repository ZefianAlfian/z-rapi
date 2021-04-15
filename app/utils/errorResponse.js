class ErrorResponse extends Error {
  /**
 * ErrorResponse
 * @param {String} message - Message.
 * @param {Number} statusCode - StatusCode (optional).
 */
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
