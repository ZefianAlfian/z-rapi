const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'Server error',
    });
};

module.exports = errorHandler;