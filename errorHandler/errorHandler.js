class CustomError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;

    // Capture stack trace for better debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handling middleware function
const handleError = (err, res) => {
  const { message, statusCode = 500 } = err;
  res.status(statusCode).json({
    error: message,
  });
};

module.exports = { CustomError, handleError };
