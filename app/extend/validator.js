const validator = require('validator');
module.exports = {
  validateEmail: (email) => {
    return email && validator.isEmail(email)
        && email.length < 100
  },
  validateName: (loginname) => {
    return loginname && loginname.length > 2 && loginname.length < 25
  }, 
  validatePassword: (pwd) => {
    return pwd.length < 100 & pwd.length > 6;
  }
}
