const router = require('express').Router();
const {loginPage, login} = require('../Controllers');

router.get('/', loginPage);
router.post('/', login);


module.exports= router;