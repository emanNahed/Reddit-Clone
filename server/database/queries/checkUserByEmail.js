const connection = require('../config/connection');

const checkEmail= (email)=> {
    const sqlQuery = {
        text: 'SELECT * FROM user WHERE email = $1;',
        values: [email],
    };


    return connection.query(sqlQuery);
}

module.exports = checkEmail;