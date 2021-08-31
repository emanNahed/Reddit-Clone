require('env2')('config.env');

const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.set('port', port);

module.exports = app;