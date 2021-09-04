const router = require("express").Router();

router.get('/home', (req, res) =>{
    res.json("eman");
})

module.exports= router;