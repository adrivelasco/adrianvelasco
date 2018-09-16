function errorHandler(_req, res, err) {
  res.status(err.status || 500);
  res.send(err);
}

module.exports = errorHandler;
