const mysql = require('./connection');

mysql.connect(function(error){
    this.query('SELECT * FROM users' , function(err, result) {
        if(result instanceof Array) {
            result.map(user => {
                console.log(user.id);

            })    
        }
    }) 
    
})
