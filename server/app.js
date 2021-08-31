require('env2')('config.env');

const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.set('port', port);

app.get('/', (req,res) => {
    res.send('hello');
});

module.exports = app;