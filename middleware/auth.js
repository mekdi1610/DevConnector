const jwt = require("jsonwebtoken");
const ENCRYPTION_KEY =
"8GmQcqXXZ3jy7RPXq5ZuYqWGz3SLrVdCrnQW8Y8MRDqNdUArkVuKS9ukiFkqxGN6";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  try {
    let decoded = jwt.verify(token, ENCRYPTION_KEY);

    req.jwt = decoded;

    return next();
  } catch (error) {
    console.error(error);

    return res.status(401).send({
      message: "invalid_token",
    });
  }
}

function generateAccessToken(user) {
  var role = ["anonymous", user.role];

  // generate token
  const user_token = {
    sub: user.id,
    phone: user.phone,
    devconnector: {
      "x-role": user.role,
      "x-user-id": "" + user.id,
      "x-default-role": "anonymous"
    },
  };

  const token = jwt.sign(user_token, ENCRYPTION_KEY, {
    algorithm: "HS256",
    expiresIn: "2 hours",
  });

  return token;
}
module.exports = {
  authenticateToken,
  generateAccessToken,
};
