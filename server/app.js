require('env2')('config.env');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./Router');
const passport = require('passport');
require('./config/passport');

app.use(express.json());
app.set('port', port);
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

console.log(app.get('port'));
app.use(router);
module.exports = app;