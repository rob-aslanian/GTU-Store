const mysql =  require('mysql');

const __connection = mysql.createConnection({
                            host: 'localhost',
                            user:'root',
                            password:'',
                            database:'gtu_store',
                    });

module.exports = {
    connect: function(cb) {
        try{
           return __connection.connect(cb.bind(__connection));
        } catch (err){
            throw new Error(err);
        }
    }
}