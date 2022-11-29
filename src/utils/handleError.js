const CustomError = require('./CustomError');
const sendResponse = require('./sendResponse');

const handleValidationErr = (err) => {
  const errors = Object.values(err.errors).map((el) => {
    if (el.kind === 'unique') {
      return `This ${el.path} already exists`;
    }
    return el.message;
  });

  return new CustomError('Invalid data', 400, errors);
};

const handleMongoCastErr = () => {
  return new CustomError('This id does not exist', 400);
};

const sendProdError = (err, res) => {
  if (err.isOperational) {
    sendResponse(res, err.statusCode, {
      status: err.status,
      message: err.message,
      errors: err.errors,
    });
  } else {
    // Log error
    console.error('Error', err);
    // Send generic message
    sendResponse(res, err.statusCode, {
      status: 'error',
      message: 'Oops! Something went wrong!',
    });
  }
};

module.exports = (res, err) => {
  let error = Object.create(err);

  // Custom error checks
  if (error.name === 'ValidationError') error = handleValidationErr(error);
  if (error.name === 'CastError') error = handleMongoCastErr();

  sendProdError(error, res);
};
