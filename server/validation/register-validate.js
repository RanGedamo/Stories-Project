const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateRegister = (user) => {
    errors = {};
    user.userName = isEmpty(user.userName) ? "" : user.userName;
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;
    user.confirmPassword = isEmpty(user.confirmPassword) ? "" : user.confirmPassword;

    if (validator.isEmpty(user.userName)) errors.message = "User Name Is required";
    if (validator.isEmpty(user.email)) errors.message = "email Is required";
    if(!validator.isEmail(user.email)) errors.message = "email Is not valid";
    if (validator.isEmpty(user.password)) errors.message = "password Is required";
    if (!validator.equals(user.password, user.confirmPassword)) errors.message = "Passwords not match"
    return {
        errors,
        isValid: isEmpty(errors)
    }
}