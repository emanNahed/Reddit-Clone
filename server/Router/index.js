const router= require('express').Router();
const { errorHandler } = require('../Controllers');
const register = require('./signup');

router.use('/register', register);
router.use(errorHandler);

module.exports= router;