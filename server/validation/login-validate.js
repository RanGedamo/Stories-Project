const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateLogin = (user) => {
    errors = {};
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;

    if (validator.isEmpty(user.email)) errors.message = "email Is required";
    if(!validator.isEmail(user.email)) errors.message = "email Is not valid";
    if (validator.isEmpty(user.password)) errors.message = "password Is required";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}