const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const registerValidate = (data)=>{
    const userRegister = Joi.object({
        userName:Joi.string().required(),
        email:Joi.string().email().required(),
        password:passwordComplexity().required(),
        avatar:Joi.string()
    })
    return userRegister.validate(data);
};

module.exports = {registerValidate}