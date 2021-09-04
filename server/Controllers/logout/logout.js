const logout = (req,res)=> {
    req.logout();
    res.redirect('/dashboard');
}

module.exports= logout;