const router= require('express').Router();
const { errorHandler } = require('../Controllers');
const register = require('./signup');
const login = require('./login')
const homePage= require('./dashboard')
router.use('/register', register);

router.use('/login', login);
router.use('/home', homePage);
router.use(errorHandler);

module.exports= router;