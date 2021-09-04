require('env2')('config.env');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const router = require('./Router');

app.use(express.json());
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
console.log(app.get('port'));
app.use(router);
module.exports = app;