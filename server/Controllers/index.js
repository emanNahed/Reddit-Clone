const getRegisterFile = require('./register/getRegisterFile');
const register = require('./register/signup');
const errorHandler = require('./error/errorHandler');
const login = require('./login/login');
const loginPage = require('./login/getLoginPage');
const logout= require('./logout/logout')

module.exports = 
{getRegisterFile,
register,
loginPage,
login,
logout,
errorHandler};

