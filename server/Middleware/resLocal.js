const locals= (req, res, next)=>{

    console.log(req.user);
    res.locals.isAuthenticated= req.user? true: false;
    
    next();
}

module.exports = locals;