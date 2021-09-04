const router = require('express').Router();
const {login} = require('../Controllers');


router.post('/', login);


module.exports= router;