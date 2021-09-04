const {logout}= require('../Controllers');
const router = require('express').Router();


router.get('/', logout);

module.exports= router;