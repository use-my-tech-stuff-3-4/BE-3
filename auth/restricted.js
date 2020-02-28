
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secret');

// module.exports = (req, res, next) => {
//     const token = req.headers.authorization;
//     jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
//         if (err) {
//             res.status(401).json({ message: "Invalid credentials" })
//         } else {
//             req.decodedToken = decodedToken;
//             next();
//         }
//     });
// };
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if(err) {
          // the token is not valid
          res.status(401).json({ you: "can't touch this!"})
        } else {
          req.user = { house: decodedToken.house };
  
          next();
        }
      })
    } else {
      res.status(401).json({ you: 'shall not pass!'})
    }
};