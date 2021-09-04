const getRegisterFile = require('./register/getRegisterFile');
const register = require('./register/signup');
const errorHandler = require('./error/errorHandler');
const login = require('./login/login');

module.exports = 
{getRegisterFile,
register,
login,
errorHandler};

