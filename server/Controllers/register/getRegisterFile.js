const path = require('path');

const getRegisterFile = (req,res)=>{
    res.send('please sign up');
    // res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'views', 'signup.html'));
}

module.exports= getRegisterFile;