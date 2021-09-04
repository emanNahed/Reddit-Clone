const passport = require("passport");



const login = passport.authenticate('local', {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true,
});

module.exports= login;