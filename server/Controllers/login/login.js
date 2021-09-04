const passport = require("passport");



const login = passport.authenticate('local', {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
});

module.exports= login;