require('env2')('config.env');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./Router');
const passport = require('passport');
const exphbs = require('express-handlebars');
const path = require('path');
const { locals } = require('./Middleware');
require('./config/passport');

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({ 
    extname: 'hbs',
    defaultLayout: 'layout' }));
app.set('view engine', 'hbs');
      
app.use(express.json());
app.set('port', port);
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());


app.use(locals);
console.log(app.get('port'));
app.use(router);
module.exports = app;