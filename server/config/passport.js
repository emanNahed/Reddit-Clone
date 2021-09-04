const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const {findUserById, checkEmail} = require('../database/queries');
const bcrypt= require('bcrypt');


//passport serialize
passport.serializeUser((user, done)=>{
    done(null, user.id);
});

//passport deserialize
passport.deserializeUser(async (userId, done)=>{
    try{
        const user = await findUserById(userId);
        done(null, user);
    }
    catch(err){
        done(err, null);
    }
});


//passport use
passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
async (email, password, done)=> {
    try{
        const user = await checkEmail(email);
        if(user.rowCount == 0)
            return done(null, false, {msg: 'email or password is not correct'});
        


        const compare = await bcrypt.compare(password,user.rows[0].password);
        if(!compare) 
            return done(null, false, {msg: "email or password is not correct"})
        return done(null, user.rows[0]);
    }
    catch(err){
        done(err, null);
    }
}));
