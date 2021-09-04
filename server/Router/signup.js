const router = require('express').Router();
const {getRegisterFile,register} = require('../Controllers');

router.get('/', getRegisterFile);
router.post('/',register);


module.exports= router;