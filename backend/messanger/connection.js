const mysql =  require('mysql');

const __connection = mysql.createConnection({
                            host: 'localhost',
                            user:'root',
                            password:'',
                            database:'gtu_store',
                    });

__connection.connect(function(err) {
    if(err){
        console.log("Error connected to db" , err);
        throw err;
    }

    console.log("Succesfuly connect to db");
    
});

module.exports = {
    db: __connection,
}