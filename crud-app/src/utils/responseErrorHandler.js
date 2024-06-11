class ResponseErrorHandler extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

export default ResponseErrorHandler;
