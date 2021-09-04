const connection= require('../../config/connection');

const addUser = (userData)=>{
    const sqlQuery = {
        text: 'INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING *',
        values: [userData.username, userData.email, userData.password]
    };

    return connection.query(sqlQuery);
}

module.exports= addUser;