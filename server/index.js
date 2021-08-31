const app = require('./app');

app.listen(app.get('port'), ()=> {
    console.log(`listening in http://localhost:${app.get('port')}`)
});