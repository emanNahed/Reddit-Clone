const {checkEmail, addUser} = require('../../database/queries');
const {regValidation}= require('../../utilis/index.js');
const ApiError = require('../error/ApiError');
const bcrypt= require('bcrypt');

const register = async (req, res, next) => {
    const {error} = await regValidation.validate(req.body);
    
    if(error){
        console.log(error);
        return  next(ApiError.badRequest(error.details));
    }

    const users= await checkEmail(req.body)
    if(users.rowCount > 0){
        return next(ApiError.badRequest('user email is logged!'))
    }

    const password = req.body.password;

    console.log(password);
    const hashPass= await bcrypt.hash(password, 10);
    const newUser = await addUser(req.body, hashPass);

    console.log(newUser.rows)

    res.json('eman');
}

module.exports= register;