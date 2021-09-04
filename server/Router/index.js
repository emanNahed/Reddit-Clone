const router= require('express').Router();
const { errorHandler } = require('../Controllers');
const register = require('./signup');
const login = require('./login');
const logout = require('./logout');
const homePage= require('./dashboard');
const home = require('./home');
router.use('/register', register);


router.use('/', home);
router.use('/login', login);
router.use('/dashboard', homePage);
router.use('/logout', logout);
router.use(errorHandler);

module.exports= router;