const jwt = require("jsonwebtoken");
const jwt_sig = "rahulguptawiproworking";

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send("Please login first token not found");
  }
  try {
    const string = jwt.verify(token,jwt_sig);
    req.user = string.user;
    next();
  } catch (error) {
    res.status(401).send("Please login first" + error.message);
  }
};

module.exports = fetchuser;
