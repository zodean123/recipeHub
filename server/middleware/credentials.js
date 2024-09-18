const credentials = (req, res, next) => {
  // Always set the Access-Control-Allow-Credentials header
  res.header("Access-Control-Allow-Credentials", true);
  next();
};

module.exports = credentials;
