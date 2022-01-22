const authRequired = (req, res, next) => {
  if (!req.user) {
    console.log(req.headers);
    throw new Error("No user attached to request");
  }
  next();
};

module.exports = { authRequired };
