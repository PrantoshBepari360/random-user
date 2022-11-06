const errorHandler = (err, _req, res, _next) => {
  res.send(err.message);
};

module.exports = errorHandler;
