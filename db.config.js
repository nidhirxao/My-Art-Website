const mysql = require('mysql');

// create here mysql connection
//mysql://b021387c5e5af6:a85c63c1@us-cdbr-east-05.cleardb.net/heroku_44a14e02619144e?reconnect=true


const dbConn = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b021387c5e5af6',
    password: 'a85c63c1',
    database: 'heroku_44a14e02619144e',
    

});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = dbConn;
