const connection = require('../../config/connection');


const findUserById = (id)=> {
    const sqlQuery = {
        text: 'SELECT * FROM users WHERE users.id = $1',
        values: [id],
    };


    return connection.query(sqlQuery);
}


module.exports= findUserById;