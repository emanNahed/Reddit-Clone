const path = require('path');

const getRegisterFile = (req,res)=>{
    res.render('register');
    // res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'views', 'signup.html'));
}

module.exports= getRegisterFile;