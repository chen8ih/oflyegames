'use strict';
const jwt = require('jsonwebtoken');

module.exports = {
  checkToken: function (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.app.config.encrypt_key, function (err, decoded) {
        if (err) {
          console.log('check token failed', err);
          resolve(false);
        } else {
          // console.log('---decoded---', decoded)
          resolve(decoded);
        }
      });
    })
  }
}