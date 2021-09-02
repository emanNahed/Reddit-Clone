const joi= require('joi');
const {JoiPassword } = require('joi-password');

const userSignUp= joi.object({
    username: joi.string().min(5).alphanum().required(),
    email: joi.string().email().required(),
    password: JoiPassword.string().minOfSpecialCharacters(1)
    .minOfNumeric(1).minOfUppercase(1)
    .minOfLowercase(1).min(8)
    .required(),
});


module.exports = userSignUp;