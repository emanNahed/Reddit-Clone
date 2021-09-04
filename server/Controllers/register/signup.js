const {checkEmail, addUser} = require('../../database/queries');
const {regValidation}= require('../../utilis/index.js');
const ApiError = require('../error/ApiError');

const register = async (req, res, next) => {
    const {error} = await regValidation.validate(req.body);
    
    if(error){
        console.log(error);
        return  next(ApiError.badRequest('eman'));
    }

    const users= await checkEmail(req.body)
    if(users.rowCount > 0){
        return next(ApiError.badRequest('user email is logged!'))
    }
    const newUser = await addUser(req.body);

    res.json('eman');
}

module.exports= register;